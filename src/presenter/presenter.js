import {render, RenderPosition} from '../framework/render.js';
import SortView from '../view/sort-view.js';
import TripInfoView from '../view/trip-info-view.js';
import NoPointView from '../view/no-point-view.js';
import PointPresenter from './point-presenter.js';
import {SortType} from '../mock/constants';
import {sortPointsDayUp, sortPointsPriceUp, sortPointsTimeUp} from '../utils.js';
import {updateItem} from '../utils.js';

export default class TripPresenter {
  #tripContainer = null;
  #pointsModel = null;
  #tripPoints = [];
  #boardPoints = [];
  #currentSortType = [];

  #pointsList = new TripInfoView();
  #sortComponent = new SortView();
  #noTaskComponent = new NoPointView();

  #pointPresenter = new Map();

  constructor(tripContainer, pointsModel) {
    this.#tripContainer = tripContainer;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#tripPoints = [...this.#pointsModel.point];
    this.#boardPoints = [...this.#pointsModel.point];

    if (this.#tripPoints.length === 0) {
      this.#renderNoPoints();
    } else {
      this.#renderSort();
      this.#renderPointList();
    }
  }

  #renderSort = () => {
    render(this.#sortComponent, this.#tripContainer, RenderPosition.AFTERBEGIN);
    this.#sortComponent.setSortTypeChangeHandler(this.#handleSortTypeChange);
  };

  #renderNoPoints = () => {
    render(this.#noTaskComponent, this.#tripContainer, RenderPosition.AFTERBEGIN);
  };

  #renderPoints = (from, to) => {
    this.#tripPoints
      .slice(from, to)
      .forEach((point) => this.#renderPoint(point));
  };

  #renderPointList = () => {
    render(this.#pointsList, this.#tripContainer);
    this.#renderPoints(0, this.#tripPoints.length);
  };

  #renderPoint = (point) => {
    const pointPresenter = new PointPresenter(this.#pointsList.element, this.#handlePointChange, this.#handleModeChange);
    pointPresenter.init(point);
    this.#pointPresenter.set(point.id, pointPresenter);
  };

  #clearEventsList = () => {
    this.#pointPresenter.forEach((presenter) => presenter.destroy());
    this.#pointPresenter.clear();
  };

  #handlePointChange = (updatedPoint) => {
    this.#tripPoints = updateItem(this.#tripPoints, updatedPoint);
    this.#boardPoints = updateItem(this.#boardPoints, updatedPoint);
    this.#pointPresenter.get(updatedPoint.id).init(updatedPoint);
  };

  #handleModeChange = () => {
    this.#pointPresenter.forEach((presenter) => presenter.resetView());
  };

  #sortPoints = (sortType) => {
    switch (sortType) {
      case SortType.DAY:
        this.#tripPoints.sort(sortPointsDayUp);
        break;
      case SortType.TIME:
        this.#tripPoints.sort(sortPointsTimeUp);
        break;
      case SortType.PRICE:
        this.#tripPoints.sort(sortPointsPriceUp);
        break;
      default:
        this.#tripPoints = [...this.#boardPoints];
    }

    this.#currentSortType = sortType;
  };

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#sortPoints(sortType);
    this.#clearEventsList();
    this.#renderPointList();
  };
}
