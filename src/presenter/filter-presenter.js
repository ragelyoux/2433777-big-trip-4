import { remove, replace, render } from '../framework/render.js';
import { FILTER_TYPES, UPDATE_TYPES } from '../constants.js';
import { filtering } from '../utils.js';
import FilterView from '../view/filter-view.js';


export default class FilterPresenter {
  #filterContainer = null;
  #filterModel = null;
  #pointsModel = null;

  #filterComponent = null;

  constructor(filterContainer, filterModel, pointsModel) {
    this.#filterContainer = filterContainer;
    this.#filterModel = filterModel;
    this.#pointsModel = pointsModel;

    this.#pointsModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
  }

  get filters() {
    const points = this.#pointsModel.points;

    return [
      {
        type: FILTER_TYPES.EVERYTHING,
        name: 'EVERYTHING',
        count: filtering[FILTER_TYPES.EVERYTHING](points).length,
      },
      {
        type: FILTER_TYPES.PAST,
        name: 'PAST',
        count: filtering[FILTER_TYPES.PAST](points).length,
      },
      {
        type: FILTER_TYPES.FUTURE,
        name: 'FUTURE',
        count: filtering[FILTER_TYPES.FUTURE](points).length,
      },
    ];
  }

  init = () => {
    const filters = this.filters;
    const prevFilterComponent = this.#filterComponent;

    this.#filterComponent = new FilterView(filters, this.#filterModel.filter);
    this.#filterComponent.setFilterTypeChangeHandler(this.#handleFilterTypeChange);

    if (prevFilterComponent === null) {
      render(this.#filterComponent, this.#filterContainer);
      return;
    }

    replace(this.#filterComponent, prevFilterComponent);
    remove(prevFilterComponent);
  };

  #handleModelEvent = () => {
    this.init();
  };

  #handleFilterTypeChange = (filterType) => {
    if (this.#filterModel.filter === filterType) {
      return;
    }

    this.#filterModel.setFilter(UPDATE_TYPES.MAJOR, filterType);
  };
}
