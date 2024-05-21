import dayjs from 'dayjs';
import { FilterType } from './mock/constants';

const getRandomPositiveInteger = (min, max) => {
  if (min < max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

const updateItem = (items, update) => {
  const index = items.findIndex((item) => item.id === update.id);

  if (index === -1) {
    return items;
  }

  return [
    ...items.slice(0, index),
    update,
    ...items.slice(index + 1),
  ];
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const isEscKeyDown = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const isPointFuture = (pointDate) => dayjs(pointDate.dateFrom).isAfter(dayjs());

const isPointPast = (pointDate) => dayjs(pointDate.dateFrom).isBefore(dayjs());

const filter = {
  [FilterType.EVERYTHING]: (points) => points,
  [FilterType.FUTURE]: (points) => points.filter((point) => isPointFuture(point)),
  [FilterType.PAST]: (points) => points.filter((point) => isPointPast(point))
};

const getRandomDate = () => dayjs()
  .add(getRandomPositiveInteger(1, 7), 'day')
  .add(getRandomPositiveInteger(1, 23), 'hour')
  .add(getRandomPositiveInteger(1, 59), 'minute');

const generateRandomDates = () => {
  const date1 = getRandomDate();
  const date2 = getRandomDate();

  if (date1.isBefore(date2)) {
    return {
      dateFrom: date1.toISOString(),
      dateTo: date2.toISOString()
    };
  }
  return {
    dateFrom: date2.toISOString(),
    dateTo: date1.toISOString()
  };
};

export const generateFilter = (points) => Object.entries(filter).map(
  ([filterName, filterPoints]) => ({
    name: filterName,
    count: filterPoints(points).length
  })
);

export {
  getRandomPositiveInteger,
  updateItem,
  getRandomArrayElement,
  generateRandomDates,
  isEscKeyDown,
  isPointFuture,
  isPointPast,
  filter
};
