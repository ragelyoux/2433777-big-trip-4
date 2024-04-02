import Presenter from './presenter/presenter.js';
import PointModel from './model/point-model.js';

const tripInfoContainer = document.querySelector('.trip-main');
const filterContainer = document.querySelector('.trip-controls__filters');
const eventListContainer = document.querySelector('.trip-events');

const containers = {
  tripInfo: tripInfoContainer,
  filter: filterContainer,
  event: eventListContainer,
};

const pointsModel = new PointModel();
const boardPresenter = new Presenter({containers, pointsModel});

boardPresenter.init();
