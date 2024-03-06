import {createElement} from '../render.js';
import {createFilterTemplate} from '../template/filter-template.js';

export default class FilterView {
  constructor() {
    this._element = null;
  }

  _getTemplate() {
    return createFilterTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this._getTemplate());
    }

    return this._element;
  }
}
