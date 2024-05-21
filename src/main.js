import { render } from './render.js';
import { generateFilter } from './utils.js';
import FilterView from './view/filter-view.js';
import PointModel from './model/point-model.js';
import Presenter from './presenter/presenter.js';

const pointModel = new PointModel();
const filter = generateFilter(pointModel.point);
const headerElement = document.querySelector('.trip-main');
const mainElement = document.querySelector('.page-main');
const tripPresenter = new Presenter(mainElement.querySelector('.trip-events'), pointModel);

render(new FilterView(filter), headerElement.querySelector('.trip-controls__filters'));

tripPresenter.init();
