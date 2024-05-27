import AbstractView from '../framework/view/abstract-view.js';
import { FILTER_TYPES } from '../constants.js';

const NoPointsTextType = {
  [FILTER_TYPES.EVERYTHING]: 'Click New Event to create your first point',
  [FILTER_TYPES.PAST]: 'There are no past events now',
  [FILTER_TYPES.FUTURE]: 'There are no future events now',
};

const createNoPointTemplate = (filterType) => {
  const noTaskTextValue = NoPointsTextType[filterType];

  return (
    `<p class="trip-events__msg">${noTaskTextValue}</p>`
  );
};

export default class NoPointView extends AbstractView {
  #filterType = null;

  constructor(filterType) {
    super();
    this.#filterType = filterType;
  }

  get template() {
    return createNoPointTemplate(this.#filterType);
  }

}
