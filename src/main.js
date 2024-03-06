import FilterView from './view/filter-view.js';
import TripInfoView from './view/trip-info-view.js';
import Presenter from './presenter/presenter.js';
import {render, RenderPosition} from './render.js';

const bodyElement = document.querySelector('body');
const headerElement = bodyElement.querySelector('.page-header');
const tripInfoElement = headerElement.querySelector('.trip-main');
const filterElement = tripInfoElement.querySelector('.trip-controls__filters');
const mainElement = bodyElement.querySelector('.page-main');
const eventListElement = mainElement.querySelector('.trip-events');

const eventPresenter = new Presenter({
  container: eventListElement
});

const tripInfoView = new TripInfoView();
const filterView = new FilterView();

render(tripInfoView, tripInfoElement, RenderPosition.AFTERBEGIN);
render(filterView, filterElement);

eventPresenter.init();
