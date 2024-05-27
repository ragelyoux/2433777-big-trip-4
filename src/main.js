import Api from './api.js';
import { render } from './framework/render.js';
import OfferModel from './model/offer-model.js';
import PointsModel from './model/point-model.js';
import FilterModel from './model/filter-model.js';
import TripPresenter from './presenter/presenter.js';
import DestinationModel from './model/destination-model.js';
import FilterPresenter from './presenter/filter-presenter.js';
import NewPointButtonView from './view/new-point-button-view.js';
import { AUTHORIZATION_TOKEN, END_POINT } from './constants.js';

const headerElement = document.querySelector('.trip-main');
const mainElement = document.querySelector('.page-main');


const newPointButtonComponent = new NewPointButtonView();

const pointsModel = new PointsModel(new Api(END_POINT, AUTHORIZATION_TOKEN));
const destinationsModel = new DestinationModel(new Api(END_POINT, AUTHORIZATION_TOKEN));
const offersModel = new OfferModel(new Api(END_POINT, AUTHORIZATION_TOKEN));

const filterModel = new FilterModel();

const filterPresenter = new FilterPresenter(headerElement.querySelector('.trip-controls__filters'), filterModel, pointsModel);
filterPresenter.init();

const tripPresenter = new TripPresenter(headerElement.querySelector('.trip-main__trip-info'), mainElement.querySelector('.trip-events'), pointsModel, filterModel, destinationsModel, offersModel);
tripPresenter.init();

const handleNewPointFormClose = () => {
  newPointButtonComponent.element.disabled = false;
};

const handleNewPointButtonClick = () => {
  tripPresenter.createPoint(handleNewPointFormClose);
  newPointButtonComponent.element.disabled = true;
};

offersModel.init().finally(() => {
  destinationsModel.init().finally(() => {
    pointsModel.init().finally(() => {
      render(newPointButtonComponent, headerElement);
      newPointButtonComponent.setClickHandler(handleNewPointButtonClick);
    });
  });
});
