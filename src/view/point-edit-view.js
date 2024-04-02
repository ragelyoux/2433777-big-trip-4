import {createElement} from '../render.js';
import {createPointEditTemplate} from '../template/point-edit-template.js';

const DEFAULT_POINT = {
  id: null,
  type: null,
  price: null,
  date: null,
  destination: null,
  offer: null,
  isFavorite: false,
};

export default class PointEditView {
  constructor({point = DEFAULT_POINT}) {
    this.point = point;
  }

  getTemplate() {
    return createPointEditTemplate(this.point);
  }

  getElement() {
    if(!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
