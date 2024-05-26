const OFFERS = ['Upgrade to a business class', 'Order Uber', 'Add lunch', 'Order train'];

const DESTINATIONS = ['Tokyo', 'Sydney', 'New York', 'London', 'Paris', 'Rome', 'Toronto', 'Washington'];

const POINT_TYPES = {
  TAXI: 'taxi',
  BUS: 'bus',
  TRAIN: 'train',
  SHIP: 'ship',
  DRIVE: 'drive',
  FLIGHT: 'flight',
  CHECK_IN: 'check-in',
  SIGHTSEEING: 'sightseeing',
  RESTAURANT: 'restaurant'
};

const DESCRIPTIONS = [
  'Tokyo, the bustling capital of Japan, is a city known for its futuristic skyline, cutting-edge technology, and vibrant street life.',
  'Sydney, the iconic harbor city of Australia, is famous for its stunning landmarks such as the Sydney Opera House and Harbour Bridge.',
  'London, the capital city of England, is steeped in history and culture, with iconic landmarks like Buckingham Palace, the Tower of London, and the British Museum.',
  'New York City, often referred to as the "Big Apple," is a global hub of finance, culture, and entertainment.',
  'Paris, the romantic capital of France, is renowned for its stunning architecture, world-class art museums, and gourmet cuisine.',
  'Rome, the eternal city of Italy, is a treasure trove of ancient history, art, and culture.'
];

const SortType = {
  DAY: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFER: 'offer',
};

const prices = {
  MIN: 10,
  MAX: 100
};

const tripPrices = {
  MIN: 100,
  MAX: 1500
};

const picturesCount = {
  MIN: 1,
  MAX: 4
};

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PAST: 'past'
};

const maxPoints = 8;

const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
  INIT: 'INIT',
};

const UserAction = {
  UPDATE_POINT: 'UPDATE_POINT',
  ADD_POINT: 'ADD_POINT',
  DELETE_POINT: 'DELETE_POINT',
};

const Method = {
  GET: 'GET',
  PUT: 'PUT',
};

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING'
};

export { POINT_TYPES, OFFERS, DESCRIPTIONS, DESTINATIONS, tripPrices, prices, FilterType, SortType, picturesCount, maxPoints, UpdateType, UserAction, Method, Mode };
