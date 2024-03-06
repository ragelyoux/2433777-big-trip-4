import {createElement} from '../render.js';
import {createSortTemplate} from '../template/sort-template.js';

export default class UniqueSortView {
  constructor() {
    this.element = null;
  }

  getTemplate() {
    return createSortTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }
}
