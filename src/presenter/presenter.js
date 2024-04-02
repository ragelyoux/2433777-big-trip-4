import { render, RenderPosition } from '../render.js';
import EventListView from '../view/event-list-view.js';
import FilterView from '../view/filter-view';
import PointEditView from '../view/point-edit-view.js';
import PointView from '../view/point-view.js';
import SortView from '../view/sort-view.js';
import TripInfoView from '../view/trip-info-view';

export default class BoardPresenter {
  constructor({ containers, pointsModel }) {
    this.containers = containers;
    this.pointsModel = pointsModel;
    this.eventList = new EventListView();
  }

  init() {
    this.tripPoints = [...this.pointsModel.getPoints()];

    render(new TripInfoView(), this.containers.tripInfo, RenderPosition.AFTERBEGIN);
    render(new FilterView(), this.containers.filter);
    render(new SortView(), this.containers.event);
    render(this.eventList, this.containers.event);
    render(new PointEditView({ point: this.tripPoints[0] }), this.eventList.getElement());

    for (let i = 1; i < this.tripPoints.length; i++) {
      render(new PointView({ point: this.tripPoints[i] }), this.eventList.getElement());
    }
  }
}
