import AbstractView from '../framework/view/abstract-view';
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

export default class PointEditView extends AbstractView {
  #point;
  #onPointEditReset;
  #onPointEditSubmit;

  constructor({point = DEFAULT_POINT, onPointEditReset, onPointEditSubmit}) {
    super();
    this.#point = point;
    this.#onPointEditReset = onPointEditReset;
    this.#onPointEditSubmit = onPointEditSubmit;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#pointEditResetHandler);
    this.element.querySelector('form').addEventListener('submit', this.#pointEditSubmitHandler);
  }

  #pointEditResetHandler = (evt) => {
    evt.preventDefault();
    this.#onPointEditReset();
  };

  #pointEditSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#onPointEditSubmit();
  };

  get template() {
    return createPointEditTemplate(this.#point);
  }
}
