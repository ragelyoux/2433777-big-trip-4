import AbstractView from '../framework/view/abstract-view';
import {createTripInfoTemplate} from '../template/trip-info-template.js';

export default class TripInfoView extends AbstractView {
  get template() {
    return createTripInfoTemplate();
  }
}
