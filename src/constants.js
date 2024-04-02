const TRANSPORT_TYPES = ['Car', 'Bus', 'Train', 'Boat', 'Bike', 'Plane', 'Hotel', 'Tour', 'Restaurant'];

const PRICES = [15, 25, 35, 45, 55, 65, 75, 85, 95, 105];

const DESTINATIONS = new Map([
  [0, 'Tokyo'],
  [1, 'Paris'],
  [2, 'London'],
  [3, 'New York'],
  [4, 'Sydney'],
  [5, 'Rio de Janeiro']
]);

const DESCRIPTIONS = new Map([
  [0, 'Tokyo, the bustling capital of Japan, is a city where tradition meets modernity. From the historic Senso-ji Temple to the futuristic Tokyo Skytree, there\'s something for everyone in this vibrant metropolis.'],
  [1, 'Paris, the City of Light, is famous for its iconic landmarks such as the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral. With its charming streets, world-class cuisine, and rich cultural heritage, Paris is a dream destination for travelers.'],
  [2, 'London, the capital of England, is a dynamic city known for its iconic landmarks like Big Ben, Buckingham Palace, and the Tower of London. From its thriving arts scene to its diverse culinary offerings, London has something to offer every visitor.'],
  [3, 'New York City, the city that never sleeps, is a melting pot of cultures, cuisines, and experiences. From Broadway shows to world-class museums, there\'s always something new to discover in the Big Apple.'],
  [4, 'Sydney, the jewel of Australia, is famous for its stunning harbor, beautiful beaches, and iconic landmarks like the Sydney Opera House and Harbour Bridge. Whether you\'re surfing at Bondi Beach or exploring the Blue Mountains, Sydney has something for everyone.'],
  [5, 'Rio de Janeiro, the Cidade Maravilhosa (Marvelous City), is famous for its breathtaking beaches, vibrant street life, and iconic landmarks like Christ the Redeemer and Sugarloaf Mountain. With its lively samba music and colorful Carnival celebrations, Rio is a city like no other.']
]);

const TIMETABLE = [
  {
    startTime: '2024-03-03T08:00',
    endTime: '2024-03-03T12:00'
  },
  {
    startTime: '2024-03-03T13:00',
    endTime: '2024-03-03T18:00'
  },
  {
    startTime: '2024-03-04T09:00',
    endTime: '2024-03-04T15:00'
  },
  {
    startTime: '2024-03-04T16:00',
    endTime: '2024-03-04T20:00'
  },
  {
    startTime: '2024-03-05T10:00',
    endTime: '2024-03-05T16:00'
  }
];

const EXTRAS = [
  ['Airport transfer', 15],
  ['City tour', 25],
  ['Upgrade to deluxe', 35],
  ['Private yacht rental', 45],
  ['Helicopter tour', 55],
  ['VIP dinner experience', 65],
  ['Spa package', 75]
];

export {TRANSPORT_TYPES, PRICES, DESTINATIONS, DESCRIPTIONS, TIMETABLE, EXTRAS};
