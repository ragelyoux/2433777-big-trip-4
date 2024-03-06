import {createElement} from '../render.js';
import {createPointEditTemplate} from '../template/point-edit-template.js';

export default class PointEditView {
  constructor() {
    this._element = null;
  }

  _getTemplate() {
    return createPointEditTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this._getTemplate());
    }
    return this._element;
  }
}
