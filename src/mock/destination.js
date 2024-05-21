import { nanoid } from 'nanoid';
import { getRandomArrayElement, getRandomPositiveInteger,generateRandomDates } from '../utils.js';
import { POINT_TYPES, DESCRIPTIONS, DESTINATIONS, tripPrices, prices, OFFERS } from './constants';


const generatePicture = () => ({
  src: `http://picsum.photos/248/152?r=${getRandomPositiveInteger(0, 10)}`,
  description: getRandomArrayElement(DESCRIPTIONS),
});

const generateOffer = (id) => ({
  id,
  title: getRandomArrayElement(OFFERS),
  price: getRandomPositiveInteger(prices.MIN, prices.MAX)
});

const generateDestination = (id) => ({
  id,
  description: getRandomArrayElement(DESCRIPTIONS),
  name: getRandomArrayElement(DESTINATIONS),
  pictures: Array.from({ length: 4 }, generatePicture)
});

const generatePoint = () => {
  const randomDates = generateRandomDates();
  return {
    basePrice: getRandomPositiveInteger(tripPrices.MIN, tripPrices.MAX),
    dateFrom: randomDates.dateFrom,
    dateTo: randomDates.dateTo,
    destination: generateDestination(),
    id: nanoid(),
    isFavorite: Boolean(getRandomPositiveInteger(0, 1)),
    offers: generateOffer(),
    type: getRandomArrayElement(POINT_TYPES)
  };
};

export { generatePoint };
