import {createElement} from '../render.js';
import {createTripInfoTemplate} from '../template/trip-info-template.js';

export default class EventListView {
  getTemplate() {
    return createTripInfoTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }
}
