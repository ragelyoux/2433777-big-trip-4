import { generatePoint } from '../mock/destination';

export default class pointModel {

  #point = Array.from({ length: 10 }, generatePoint);

  get point() {
    return this.#point;
  }
}
