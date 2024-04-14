import dayjs from 'dayjs';

/**
 * Возвращает случайный элемент из массива.
 * @param {Array} arr - Массив, из которого нужно выбрать элемент.
 * @returns {*} - Случайный элемент массива.
 */
function getRandomArrayElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Возвращает продолжительность между двумя датами в минутах.
 * @param {string | Date | number} start - Начальная дата или время.
 * @param {string | Date | number} end - Конечная дата или время.
 * @returns {string} - Продолжительность в минутах в формате 'Xm' или пустая строка, если продолжительность равна нулю.
 */
function getDurationInMinutes(start, end) {
  const minutes = dayjs(end).diff(dayjs(start), 'minutes') % 60;
  return minutes !== 0 ? `${minutes}m` : '';
}

/**
 * Возвращает продолжительность между двумя датами в часах.
 * @param {string | Date | number} start - Начальная дата или время.
 * @param {string | Date | number} end - Конечная дата или время.
 * @returns {string} - Продолжительность в часах в формате 'Xh' или пустая строка, если продолжительность равна нулю.
 */
function getDurationInHours(start, end) {
  const hours = dayjs(end).diff(dayjs(start), 'hours');
  return hours !== 0 ? `${hours}h` : '';
}

export { getRandomArrayElement, getDurationInHours, getDurationInMinutes };
