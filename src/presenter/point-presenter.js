import { render, replace, remove } from '../framework/render.js';
import WaypointView from '../view/waypoint-view.js';
import EditFormView from '../view/edit-form-view.js';
import { isEscKey } from '../utils.js';
import { FORM_MODES, UPDATE_TYPES, USER_ACTIONS } from '../constants.js';

export default class PointPresenter {

  #point = null;
  #mode = FORM_MODES.DEFAULT;

  #pointsListContainer = null;
  #changeData = null;
  #changeMode = null;

  #pointComponent = null;
  #pointEditComponent = null;

  #destinationsModel = null;
  #offersModel = null;

  #destinations = null;
  #offers = null;

  constructor(pointsListContainer, changeData, changeMode, destinationsModel, offersModel) {
    this.#pointsListContainer = pointsListContainer;
    this.#changeData = changeData;
    this.#changeMode = changeMode;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
  }

  init = (point) => {
    this.#point = point;
    this.#destinations = [...this.#destinationsModel.destinations];
    this.#offers = [...this.#offersModel.offers];

    const prevPointComponent = this.#pointComponent;
    const prevPointEditComponent = this.#pointEditComponent;

    this.#pointComponent = new WaypointView(point, this.#destinations, this.#offers);
    this.#pointEditComponent = new EditFormView({
      point,
      destination: this.#destinations,
      offers: this.#offers,
      isNewPoint: false
    });

    this.#pointComponent.setEditClickHandler(this.#handleEditClick);
    this.#pointComponent.setFavoriteClickHandler(this.#handleFavoriteClick);

    this.#pointEditComponent.setFormSubmitHandler(this.#handleFormSubmit);
    this.#pointEditComponent.setCloseClickHandler(this.#handleCloseClick);

    this.#pointEditComponent.setDeleteClickHandler(this.#handleDeleteClick);

    if (prevPointComponent === null || prevPointEditComponent === null) {
      render(this.#pointComponent, this.#pointsListContainer);
      return;
    }

    if (this.#mode === FORM_MODES.DEFAULT) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#mode === FORM_MODES.EDITING) {
      replace(this.#pointComponent, prevPointEditComponent);
      this.#mode = FORM_MODES.DEFAULT;
    }

    remove(prevPointComponent);
    remove(prevPointEditComponent);
  };

  destroy = () => {
    remove(this.#pointComponent);
    remove(this.#pointEditComponent);
  };

  resetView = () => {
    if (this.#mode !== FORM_MODES.DEFAULT) {
      this.#pointEditComponent.reset(this.#point);
      this.#replaceFormToPoint();
    }
  };

  setSaving = () => {
    if (this.#mode === FORM_MODES.EDITING) {
      this.#pointEditComponent.updateElement({
        isDisabled: true,
        isSaving: true,
      });
    }
  };

  setDeleting = () => {
    if (this.#mode === FORM_MODES.EDITING) {
      this.#pointEditComponent.updateElement({
        isDisabled: true,
        isDeleting: true,
      });
    }
  };

  setAborting = () => {
    if (this.#mode === FORM_MODES.DEFAULT) {
      this.#pointComponent.shake();
      return;
    }

    const resetFormState = () => {
      this.#pointEditComponent.updateElement({
        isDisabled: false,
        isSaving: false,
        isDeleting: false,
      });
    };

    this.#pointEditComponent.shake(resetFormState);
  };

  #replacePointToForm = () => {
    replace(this.#pointEditComponent, this.#pointComponent);
    this.#changeMode();
    this.#mode = FORM_MODES.EDITING;
    document.addEventListener('keydown', this.#onEscKeyDown);
  };

  #replaceFormToPoint = () => {
    replace(this.#pointComponent, this.#pointEditComponent);
    this.#mode = FORM_MODES.DEFAULT;
    document.removeEventListener('keydown', this.#onEscKeyDown);
  };

  #onEscKeyDown = (evt) => {
    if (isEscKey(evt)) {
      evt.preventDefault();
      this.resetView();
    }
  };

  #handleEditClick = () => {
    this.#replacePointToForm();
  };

  #handleFormSubmit = (point) => {
    this.#changeData(
      USER_ACTIONS.UPDATE_POINT,
      UPDATE_TYPES.MINOR,
      point,
    );
  };

  #handleCloseClick = () => {
    this.resetView();
  };

  #handleFavoriteClick = () => {
    this.#changeData(
      USER_ACTIONS.UPDATE_POINT,
      UPDATE_TYPES.PATCH,
      { ...this.#point, isFavorite: !this.#point.isFavorite },
    );
  };

  #handleDeleteClick = (point) => {
    this.#changeData(
      USER_ACTIONS.DELETE_POINT,
      UPDATE_TYPES.MINOR,
      point,
    );
  };

}
