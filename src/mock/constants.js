const OFFERS = ['Upgrade to a business class', 'Order Uber', 'Add lunch', 'Order train'];

const DESTINATIONS = ['Tokyo', 'Sydney', 'New York', 'London', 'Paris', 'Rome', 'Toronto', 'Washington'];

const POINT_TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

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
  TIME: 'time',
  PRICE: 'price',
};

const prices = {
  MIN: 10,
  MAX: 100
};

const tripPrices = {
  MIN: 100,
  MAX: 1500
};

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PAST: 'past'
};

export {OFFERS, POINT_TYPES, DESCRIPTIONS, DESTINATIONS, SortType, tripPrices, prices, FilterType};
