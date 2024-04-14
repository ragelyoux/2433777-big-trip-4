import AbstractView from '../framework/view/abstract-view';
import {createSortTemplate} from '../template/sort-template.js';

export default class SortView extends AbstractView{
  get template() {
    return createSortTemplate();
  }
}
