import AbstractView from '../framework/view/abstract-view';
import {createPointTemplate} from '../template/point-template.js';

export default class PointView extends AbstractView {
  #point;
  #onEditClick;

  constructor({point, onEditClick}) {
    super();
    this.#point = point;
    this.#onEditClick = onEditClick;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#editClickHandler);
  }

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this.#onEditClick();
  };

  get template() {
    return createPointTemplate(this.#point);
  }
}
