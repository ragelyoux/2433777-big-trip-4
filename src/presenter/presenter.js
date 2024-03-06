import EventListView from '../view/event-list-view.js';
import SortView from '../view/sort-view.js';
import PointView from '../view/point-view.js';
import PointEditView from '../view/point-edit-view.js';
import {render} from '../render.js';

const POINT_COUNT = 3;

export default class Presenter {
  constructor({ container }) {
    this.container = container;
    this.sortView = new SortView();
    this.eventListView = new EventListView();
  }

  init() {
    this.renderSortView();
    this.renderEventListView();
    this.renderPointEditView();
    this.renderPointViews();
  }

  renderSortView() {
    render(this.sortView, this.container);
  }

  renderEventListView() {
    render(this.eventListView, this.container);
  }

  renderPointEditView() {
    render(new PointEditView(), this.eventListView.getElement());
  }

  renderPointViews() {
    for (let i = 0; i < POINT_COUNT; i++) {
      render(new PointView(), this.eventListView.getElement());
    }
  }
}
