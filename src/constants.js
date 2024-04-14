const OFFERS = [
  ['Order food delivery', 10],
  ['Upgrade seat', 20],
  ['Priority boarding', 30],
  ['City tour', 40],
  ['Guided museum tour', 50],
  ['Book concert tickets', 60],
  ['Dinner cruise', 70]
];

const CITIES = new Map([
  [0, 'Tokyo'],
  [1, 'Sydney'],
  [2, 'New York'],
  [3, 'London'],
  [4, 'Paris'],
  [5, 'Rome']
]);

const DESCRIPTIONS = new Map([
  [0, 'Tokyo, the bustling capital of Japan, is a city known for its futuristic skyline, cutting-edge technology, and vibrant street life. From historic temples like Senso-ji to modern landmarks like the Tokyo Skytree, Tokyo offers a unique blend of tradition and innovation that captivates visitors from around the world.'],
  [1, 'Sydney, the iconic harbor city of Australia, is famous for its stunning landmarks such as the Sydney Opera House and Harbour Bridge. With its beautiful beaches, vibrant culture, and diverse dining scene, Sydney offers endless opportunities for exploration and adventure.'],
  [2, 'New York City, often referred to as the "Big Apple," is a global hub of finance, culture, and entertainment. From the bright lights of Times Square to the serene beauty of Central Park, New York City is a city of contrasts and diversity that never fails to impress visitors.'],
  [3, 'London, the capital city of England, is steeped in history and culture, with iconic landmarks like Buckingham Palace, the Tower of London, and the British Museum. From world-class theaters in the West End to charming pubs in Covent Garden, London offers something for everyone to enjoy.'],
  [4, 'Paris, the romantic capital of France, is renowned for its stunning architecture, world-class art museums, and gourmet cuisine. From the iconic Eiffel Tower to the charming streets of Montmartre, Paris exudes an undeniable charm and elegance that enchants visitors year-round.'],
  [5, 'Rome, the eternal city of Italy, is a treasure trove of ancient history, art, and culture. With iconic landmarks such as the Colosseum, Vatican City, and Trevi Fountain, Rome offers a journey through time unlike any other city in the world.']
]);

const DATE_TIMES = [
  {
    startTime: '2024-04-14T08:00',
    endTime: '2024-04-14T12:00'
  },
  {
    startTime: '2024-04-14T13:00',
    endTime: '2024-04-14T17:00'
  },
  {
    startTime: '2024-04-15T09:00',
    endTime: '2024-04-15T14:00'
  },
  {
    startTime: '2024-04-15T15:00',
    endTime: '2024-04-15T19:00'
  },
  {
    startTime: '2024-04-16T10:00',
    endTime: '2024-04-16T16:00'
  },
  {
    startTime: '2024-04-16T17:00',
    endTime: '2024-04-16T21:00'
  }
];

const TRANSPORT_TYPES = ['Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];
const PRICES = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

export {TRANSPORT_TYPES, PRICES, CITIES, DESCRIPTIONS, DATE_TIMES, OFFERS};
