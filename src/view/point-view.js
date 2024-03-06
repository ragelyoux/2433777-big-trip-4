import {createElement} from '../render.js';
import {createPointTemplate} from '../template/point-template.js';

export default class PointView {
  constructor() {
    this._element = null;
  }

  _getTemplate() {
    return createPointTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this._getTemplate());
    }

    return this._element;
  }
}
