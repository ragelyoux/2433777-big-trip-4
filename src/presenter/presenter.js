import SortView from '../view/sort-view.js';
import { filtering, sorting } from '../utils.js';
import LoadingView from '../view/loading-view.js';
import PointPresenter from './point-presenter.js';
import NoPointView from '../view/no-point-view.js';
import TripEventsView from '../view/trip-events-view.js';
import NewPointPresenter from './new-point-presenter.js';
import TripInfoPresenter from './trip-info-presenter.js';
import ErrorServerView from '../view/error-server-view.js';
import UiBlocker from '../framework/ui-blocker/ui-blocker.js';
import { render, RenderPosition, remove } from '../framework/render.js';
import { SORT_TYPES, FILTER_TYPES, USER_ACTIONS, UPDATE_TYPES, REQUEST_TIME_LIMITS } from '../constants.js';


export default class TripPresenter {
  #tripInfoContainer = null;
  #tripContainer = null;
  #pointsModel = null;
  #filterModel = null;
  #destinationsModel = null;
  #offersModel = null;

  #currentSortType = SORT_TYPES.DAY;
  #filterType = FILTER_TYPES.EVERYTHING;

  #pointsListComponent = new TripEventsView();
  #sortComponent = null;
  #noPointComponent = null;
  #loadingComponent = new LoadingView();
  #errorServer = new ErrorServerView();

  #pointPresenter = new Map();
  #pointNewPresenter = null;
  #tripInfoPresenter = null;

  #isLoading = true;
  #uiBlocker = new UiBlocker(REQUEST_TIME_LIMITS.LOWER_LIMIT, REQUEST_TIME_LIMITS.UPPER_LIMIT);

  constructor(tripInfoContainer, tripContainer, pointsModel, filterModel, destinationsModel, offersModel) {
    this.#tripInfoContainer = tripInfoContainer;
    this.#tripContainer = tripContainer;
    this.#pointsModel = pointsModel;
    this.#filterModel = filterModel;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;

    this.#pointNewPresenter = new NewPointPresenter(this.#pointsListComponent.element, this.#handleViewAction, this.#destinationsModel, this.#offersModel);

    this.#destinationsModel.addObserver(this.#handleModelEvent);
    this.#offersModel.addObserver(this.#handleModelEvent);
    this.#pointsModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
  }

  init() {
    this.#renderBoard();
  }

  get points() {
    this.#filterType = this.#filterModel.filter;
    const filteredPoints = filtering[this.#filterType](this.#pointsModel.points);
    sorting[this.#currentSortType](filteredPoints);

    return filteredPoints;
  }

  createPoint = (callback) => {
    this.#currentSortType = SORT_TYPES.DAY;
    this.#filterModel.setFilter(UPDATE_TYPES.MAJOR, FILTER_TYPES.EVERYTHING);
    this.#pointNewPresenter.init(callback);
  };

  #renderBoard = () => {
    if (this.#isLoading) {
      this.#renderLoading();
      return;
    }

    if (this.#offersModel.offers.length === 0 || this.#destinationsModel.destinations.length === 0) {
      this.#renderErrorServer();
      return;
    }

    const pointCount = this.points.length;

    if (pointCount === 0) {
      this.#renderNoPoints();
      return;
    }
    this.#renderSort();
    this.#renderPointList(this.points);
  };

  #renderSort = () => {
    this.#sortComponent = new SortView(this.#currentSortType);

    this.#sortComponent.setSortTypeChangeHandler(this.#handleSortTypeChange);
    render(this.#sortComponent, this.#tripContainer, RenderPosition.AFTERBEGIN);
  };

  #renderNoPoints = () => {
    this.#noPointComponent = new NoPointView(this.#filterType);
    render(this.#noPointComponent, this.#tripContainer, RenderPosition.AFTERBEGIN);
  };

  #renderPoint = (point) => {
    const pointPresenter = new PointPresenter(
      this.#pointsListComponent.element, this.#handleViewAction, this.#handleModeChange, this.#destinationsModel, this.#offersModel
    );

    pointPresenter.init(point);
    this.#pointPresenter.set(point.id, pointPresenter);
  };

  #renderPoints = (points) => {
    points.forEach((point) => this.#renderPoint(point));
  };

  #renderPointList = (points) => {
    render(this.#pointsListComponent, this.#tripContainer);
    this.#renderPoints(points);
  };

  #renderLoading = () => {
    render(this.#loadingComponent, this.#tripContainer, RenderPosition.AFTERBEGIN);
  };

  #renderTripInfo = () => {
    this.#tripInfoPresenter = new TripInfoPresenter(this.#tripInfoContainer, this.#destinationsModel, this.#offersModel);
    const sortedPoints = sorting[SORT_TYPES.DAY](this.points);
    this.#tripInfoPresenter.init(sortedPoints);
  };

  #renderErrorServer = () => {
    render(this.#errorServer, this.#tripContainer, RenderPosition.AFTERBEGIN);
  };

  #clearTripInfo = () => {
    this.#tripInfoPresenter.destroy();
  };

  #clearAll = ({ resetSortType = false } = {}) => {
    this.#pointNewPresenter.destroy();
    this.#pointPresenter.forEach((presenter) => presenter.destroy());
    this.#pointPresenter.clear();

    remove(this.#sortComponent);
    remove(this.#loadingComponent);

    if (this.#noPointComponent) {
      remove(this.#noPointComponent);
    }

    if (resetSortType) {
      this.#currentSortType = SORT_TYPES.DAY;
    }
  };

  #handleModeChange = () => {
    this.#pointPresenter.forEach((presenter) => presenter.resetView());
  };

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#currentSortType = sortType;
    this.#clearAll();
    this.#renderBoard();
  };

  #handleViewAction = async (actionType, updateType, update) => {
    this.#uiBlocker.block();

    switch (actionType) {
      case USER_ACTIONS.UPDATE_POINT:
        this.#pointPresenter.get(update.id).setSaving();
        try {
          await this.#pointsModel.updatePoint(updateType, update);
        } catch (err) {
          this.#pointPresenter.get(update.id).setAborting();
        }
        break;
      case USER_ACTIONS.ADD_POINT:
        this.#pointNewPresenter.setSaving();
        try {
          await this.#pointsModel.addPoint(updateType, update);
        } catch (err) {
          this.#pointNewPresenter.setAborting();
        }
        break;
      case USER_ACTIONS.DELETE_POINT:
        this.#pointPresenter.get(update.id).setDeleting();
        try {
          await this.#pointsModel.deletePoint(updateType, update);
        } catch (err) {
          this.#pointPresenter.get(update.id).setAborting();
        }
        break;
    }

    this.#uiBlocker.unblock();
  };

  #handleModelEvent = (updateType, data) => {
    switch (updateType) {
      case UPDATE_TYPES.PATCH:
        this.#pointPresenter.get(data.id).init(data);
        break;
      case UPDATE_TYPES.MINOR:
        this.#clearAll();
        this.#clearTripInfo();
        this.#renderTripInfo();
        this.#renderBoard();
        break;
      case UPDATE_TYPES.MAJOR:
        this.#clearAll({ resetSortType: true });
        this.#renderBoard();
        break;
      case UPDATE_TYPES.INIT:
        this.#isLoading = false;
        remove(this.#loadingComponent);
        remove(this.#noPointComponent);
        this.#renderBoard();
        this.#renderTripInfo();
        break;
    }
  };

}
