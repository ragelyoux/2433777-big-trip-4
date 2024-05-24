import { render } from './render.js';
import TripPresenter from './presenter/presenter.js';
import FilterView from './view/filter-view.js';
import PointsModel from './model/point-model.js';
import { generateFilter } from './utils.js';
import { getPoints, getOffersByType, getDestinations } from './mock/destination.js';

const siteMainElement = document.querySelector('.page-main');
const siteHeaderElement = document.querySelector('.trip-main');

const points = getPoints();
const offersByType = getOffersByType();
const destinations = getDestinations();

const pointsModel = new PointsModel();
pointsModel.init(points, destinations, offersByType);

const tripPresenter = new TripPresenter(siteMainElement.querySelector('.trip-events'), pointsModel);
tripPresenter.init();

const filters = generateFilter(pointsModel.points);

render(new FilterView(filters), siteHeaderElement.querySelector('.trip-controls__filters'));
