import dayjs from 'dayjs';

function getRandomArrayElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getTimeInHours(startTime, endTime) {
  const hours = dayjs(endTime).diff(dayjs(startTime), 'hours');
  return hours !== 0 ? `${hours}H` : '';
}

function getTimeInMinutes(startTime, endTime) {
  const minutes = dayjs(endTime).diff(dayjs(startTime), 'minutes') % 60;
  return minutes !== 0 ? `${minutes}M` : '';
}

export { getRandomArrayElement, getTimeInHours, getTimeInMinutes };
