import Presenter from './presenter/presenter.js';
import PointsModel from './model/point-model.js';

const containers = {
  tripInfo: document.querySelector('.trip-main'),
  filter: document.querySelector('.trip-controls__filters'),
  event: document.querySelector('.trip-events'),
};

const presenter = new Presenter({
  containers,
  pointsModel: new PointsModel()
});

presenter.init();
