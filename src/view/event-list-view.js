import AbstractView from '../framework/view/abstract-view';
import {createEventListTemplate} from '../template/event-list-template.js';

export default class EventListView extends AbstractView {
  get template() {
    return createEventListTemplate();
  }
}
