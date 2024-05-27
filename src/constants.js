const AUTHORIZATION_TOKEN = 'Basic cN5Fsq21pw0c4b7p';
const END_POINT = 'https://21.objects.htmlacademy.pro/big-trip';
const POINT_TYPES = {
  TAXI: 'taxi',
  BUS: 'bus',
  TRAIN: 'train',
  SHIP: 'ship',
  DRIVE: 'drive',
  FLIGHT: 'flight',
  CHECK_IN: 'check-in',
  SIGHTSEEING: 'sightseeing',
  RESTAURANT: 'restaurant',
};

const SORT_TYPES = {
  DAY: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFER: 'offer',
};

const FILTER_TYPES = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PAST: 'past',
};


const UPDATE_TYPES = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
  INIT: 'INIT',
};

const USER_ACTIONS = {
  UPDATE_POINT: 'UPDATE_POINT',
  ADD_POINT: 'ADD_POINT',
  DELETE_POINT: 'DELETE_POINT',
};

const FORM_MODES = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

const HTTP_METHODS = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
};

const REQUEST_TIME_LIMITS = {
  LOWER_LIMIT: 350,
  UPPER_LIMIT: 1000,
};

export {
  POINT_TYPES,
  FILTER_TYPES,
  SORT_TYPES,
  UPDATE_TYPES,
  USER_ACTIONS,
  HTTP_METHODS,
  FORM_MODES,
  AUTHORIZATION_TOKEN,
  END_POINT,
  REQUEST_TIME_LIMITS,
};
