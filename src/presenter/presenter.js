import { render, RenderPosition, replace } from '../framework/render';
import TripInfoView from '../view/trip-info-view';
import FilterView from '../view/filter-view';
import SortView from '../view/sort-view';
import EventListView from '../view/event-list-view.js';
import PointView from '../view/point-view.js';
import PointEditView from '../view/point-edit-view.js';

export default class Presenter {
  #eventList = new EventListView();
  #containers;
  #pointsModel;
  #tripPoints;

  constructor({ containers, pointsModel }) {
    this.#containers = containers;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#tripPoints = [...this.#pointsModel.points];

    render(new TripInfoView(), this.#containers.tripInfo, RenderPosition.AFTERBEGIN);
    render(new FilterView(), this.#containers.filter);
    render(new SortView(), this.#containers.event);
    render(this.#eventList, this.#containers.event);
    this.#tripPoints.forEach((point) => this.#renderPoint(point));
  }

  #renderPoint(point) {
    const pointComponent = new PointView({
      point,
      onEditClick,
    });

    const pointEditComponent = new PointEditView({
      point,
      onPointEditReset,
      onPointEditSubmit,
    });

    const escKeydown = (evt) => {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        replace(pointComponent, pointEditComponent);
        document.removeEventListener('keydown', escKeydown);
      }
    };

    function onEditClick() {
      replace(pointEditComponent, pointComponent);
      document.addEventListener('keydown', escKeydown);
    }

    function onPointEditSubmit() {
      replace(pointComponent, pointEditComponent);
      document.removeEventListener('keydown', escKeydown);
    }

    function onPointEditReset() {
      replace(pointComponent, pointEditComponent);
      document.removeEventListener('keydown', escKeydown);
    }

    render(pointComponent, this.#eventList.element);
  }
}
