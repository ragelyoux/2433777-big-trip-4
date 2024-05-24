import {nanoid} from 'nanoid';
import {getRandomArrayElement, getRandomPositiveInteger, generateRandomDates} from '../utils.js';
import {
  POINT_TYPES,
  DESCRIPTIONS,
  DESTINATIONS,
  tripPrices,
  prices,
  OFFERS,
  picturesCount,
  maxPoints
} from './constants';


const generatePicture = () => ({
  src: 'https://source.unsplash.com/random/248x152/?city',
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
  name: DESTINATIONS[id],
  pictures: Array.from({length: getRandomPositiveInteger(picturesCount.MIN, picturesCount.MAX)}, generatePicture)
});
const getDestinations = () => Array.from({length: DESTINATIONS.length}).map((value, index) => generateDestination(index));

const generateOffersByType = (pointType) => ({
  type: pointType,
  offers: Array.from({length: getRandomPositiveInteger(picturesCount.MIN, picturesCount.MAX)}).map((value, index) => generateOffer(index + 1, pointType)),
});

const getOffersByType = () => Array.from({length: POINT_TYPES.length}).map((value, index) => generateOffersByType(POINT_TYPES[index]));
const generatePoint = () => {
  const randomDates = generateRandomDates();
  const offerIds = getRandomArrayElement(getOffersByType()).offers.map((offer) => offer.id);
  return {
    basePrice: getRandomPositiveInteger(tripPrices.MIN, tripPrices.MAX),
    dateFrom: randomDates.dateFrom,
    dateTo: randomDates.dateTo,
    destinationId: getRandomArrayElement(getDestinations()).id,
    id: nanoid(),
    isFavorite: Boolean(getRandomPositiveInteger(0, 1)),
    offerIds: Array.from({length: getRandomPositiveInteger(0, offerIds.length)}).map(() => offerIds[getRandomPositiveInteger(0, offerIds.length - 1)]),
    type: getRandomArrayElement(getOffersByType()).type
  };
};

const getPoints = () => Array.from({length: maxPoints}).map(() => generatePoint()).sort();

export {getPoints, getDestinations, getOffersByType};
