import { DESTINATIONS, DESCRIPTIONS } from '../constants';

const IMAGE_COUNT = 5;
const RANDOM_BOUND = 20;

function generateMockDestination(id) {
  return {
    id: id,
    city: DESTINATIONS.get(id),
    description: DESCRIPTIONS.get(id),
    images: Array.from({ length: IMAGE_COUNT }, () => `https://loremflickr.com/248/152?random=${Math.floor(Math.random() * RANDOM_BOUND)}`)
  };
}

export { generateMockDestination };
