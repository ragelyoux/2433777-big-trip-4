import {generateRandomPoint} from '../mock/point';

const POINT_COUNT = 5;

export default class PointsModel {
  #points = Array.from({length: POINT_COUNT}, generateRandomPoint);

  get points() {
    return this.#points;
  }
}
