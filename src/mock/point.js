import { TRANSPORT_TYPES, PRICES, DESTINATIONS, TIMETABLE, EXTRAS } from '../constants';
import { getRandomArrayElement } from '../utilities';
import { generateMockDestination } from './destination';

const BOUND = 4;

function getRandomPoint() {
  const identity = Math.floor(Math.random() * DESTINATIONS.length);
  const offerCount = Math.floor(Math.random() * BOUND + 1);
  const offers = Array.from({ length: offerCount }, () => getRandomArrayElement(EXTRAS));

  return {
    id: identity,
    type: getRandomArrayElement(TRANSPORT_TYPES),
    price: getRandomArrayElement(PRICES),
    date: getRandomArrayElement(TIMETABLE),
    destination: generateMockDestination(identity),
    offer: offers,
    isFavorite: Math.floor(Math.random() * 2)
  };
}

export { getRandomPoint };
