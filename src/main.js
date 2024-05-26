import { render } from './render.js';
import TripPresenter from './presenter/presenter.js';
import PointsModel from './model/point-model.js';
import { getPoints, getOffersByType, getDestinations } from './mock/destination.js';
import FilterModel from './model/filter-model.js';
import FilterPresenter from './presenter/filter-presenter.js';
import NewPointButtonView from './view/new-point-button-view.js';

const siteMainElement = document.querySelector('.page-main');
const siteHeaderElement = document.querySelector('.trip-main');

const points = getPoints();
const offersByType = getOffersByType();
const destinations = getDestinations();

const newPointButtonComponent = new NewPointButtonView();

const pointsModel = new PointsModel();
const filterModel = new FilterModel();

pointsModel.init(points, destinations, offersByType);

const filterPresenter = new FilterPresenter(siteHeaderElement.querySelector('.trip-controls__filters'), filterModel, pointsModel);
filterPresenter.init();

const tripPresenter = new TripPresenter(siteMainElement.querySelector('.trip-events'), pointsModel, filterModel);
tripPresenter.init();

const handleNewPointFormClose = () => {
  newPointButtonComponent.element.disabled = false;
};

const handleNewPointButtonClick = () => {
  tripPresenter.createPoint(handleNewPointFormClose);
  newPointButtonComponent.element.disabled = true;
};

render(newPointButtonComponent, siteHeaderElement);
newPointButtonComponent.setClickHandler(handleNewPointButtonClick);
