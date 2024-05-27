import dayjs from 'dayjs';
import {SORT_TYPES, FILTER_TYPES} from './constants';

const isEscKey = (evt) => evt.key === 'Escape' || evt.key === 'Esc';
const isPointIsFuture = (pointDate) => dayjs(pointDate.dateFrom).isAfter(dayjs());
const isPointInPast = (pointDate) => dayjs(pointDate.dateFrom).isBefore(dayjs());
const sortPointsByDay = (pointA, pointB) => dayjs(pointA.dateFrom).diff(dayjs(pointB.dateFrom));
const formatDateTime = (date) => dayjs(date).format('DD/MM/YY hh:mm');
const formatDate = (date) => dayjs(date).format('DD MMM');


const sortPointsByTime = (pointA, pointB) => {
  const timeA = dayjs(pointA.dateTo).diff(dayjs(pointA.dateFrom));
  const timeB = dayjs(pointB.dateTo).diff(dayjs(pointB.dateFrom));

  return timeA - timeB;
};

const sortPointsByPrice = (pointA, pointB) => pointA.basePrice - pointB.basePrice;

const filtering = {
  [FILTER_TYPES.EVERYTHING]: (points) => points,
  [FILTER_TYPES.FUTURE]: (points) => points.filter((point) => isPointIsFuture(point)),
  [FILTER_TYPES.PAST]: (points) => points.filter((point) => isPointInPast(point))
};

const sorting = {
  [SORT_TYPES.DAY]: (points) => points.sort(sortPointsByDay),
  [SORT_TYPES.PRICE]: (points) => points.sort(sortPointsByPrice),
  [SORT_TYPES.TIME]: (points) => points.sort(sortPointsByTime),
};

const formatMinutes = (minutes) => {
  while (minutes > 59) {
    minutes -= 60;
  }

  if (minutes < 10 && minutes !== 0) {
    minutes = `0${minutes}M`;
  } else {
    minutes = `${minutes}M`;
  }
  return minutes;
};

const formatHours = (hours) => {
  while (hours > 23) {
    hours -= 24;
  }

  if (hours < 10 && hours !== 0) {
    hours = `0${hours}H`;
  } else if (hours === 0) {
    hours = '';
  } else {
    hours = `${hours}H`;
  }
  return hours;
};

const formatDays = (days) => {
  if (days < 10 && days !== 0) {
    days = `0${days}D`;
  } else if (days === 0) {
    days = '';
  } else {
    days = `${days}D`;
  }
  return days;
};

export {
  sorting,
  filtering,
  isEscKey,
  isPointIsFuture,
  isPointInPast,
  formatDateTime,
  formatDate,
  formatDays,
  formatHours,
  formatMinutes
};
