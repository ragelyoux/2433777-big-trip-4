import { TRANSPORT_TYPES, PRICES, CITIES, DATE_TIMES, OFFERS } from '../constants';
import { getRandomArrayElement } from '../utils';
import { getMockDestination } from './destination';

const NUMBER = 3;

function generateRandomPoint() {
  const id = Math.floor(Math.random() * CITIES.size);
  const offerCount = Math.floor(Math.random() * NUMBER + 1);
  return {
    id,
    type: getRandomArrayElement(TRANSPORT_TYPES),
    price: getRandomArrayElement(PRICES),
    date: getRandomArrayElement(DATE_TIMES),
    destination: getMockDestination(id),
    offer: Array.from({ length: offerCount }, () => getRandomArrayElement(OFFERS)),
    isFavorite: Math.floor(Math.random() * 2)
  };
}

export { generateRandomPoint };
