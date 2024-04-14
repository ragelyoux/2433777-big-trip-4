import { CITIES, DESCRIPTIONS } from '../constants';

const IMAGE_COUNT = 5;
const NUMBER = 100;

function generateRandomImageUrl() {
  return `https://loremflickr.com/248/152?random=${Math.floor(Math.random() * NUMBER)}`;
}

function getMockDestination(identity) {
  return {
    id: identity,
    city: CITIES.get(identity),
    description: DESCRIPTIONS.get(identity),
    img: Array.from({ length: IMAGE_COUNT }, generateRandomImageUrl)
  };
}

export { getMockDestination };
