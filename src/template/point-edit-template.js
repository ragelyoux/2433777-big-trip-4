import dayjs from 'dayjs';

function createPointEditOfferTemplate(offer) {
  if (offer !== null) {
    return (
      `<section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>
          <div class="event__available-offers">
            ${offer.reduce((acc, [title, price]) => (`${acc}<div class="event__offer-selector">
              <input class="event__offer-checkbox  visually-hidden" id="event-offer-train-1" type="checkbox" name="event-offer-train" checked>
              <label class="event__offer-label" for="event-offer-train-1">
                <span class="event__offer-title">${title}</span>
                  &plus;&euro;&nbsp;
                <span class="event__offer-price">${price}</span>
              </label>
            </div>`), '')}
          </div>
        </section>
      `);
  } else {
    return '';
  }
}

function createPointEditPhotoTemplate(img) {
  if (img !== null) {
    return (
      `<div class="event__photos-container">
        <div class="event__photos-tape">
          ${img.map((path) => `<img class="event__photo" src="${path}" alt="Event photo">`)}
        </div>
      </div>`);
  } else {
    return '';
  }
}

function createPointEditTemplate(point) {
  const {type, price, date, destination, offer} = point;
  const {city, description, img} = destination;

  return `<li class="trip-events__item">
            <form class="event event--edit" action="#" method="post">
                <header class="event__header">
                    <div class="event__type-wrapper">
                        <label class="event__type  event__type-btn" for="event-type-toggle-1">
                            <span class="visually-hidden">Choose event type</span>
                            <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
                        </label>
                        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
                    </div>

                    <div class="event__field-group  event__field-group--destination">
                        <label class="event__label  event__type-output" for="event-destination-1">
                            ${type}
                        </label>
                        <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${city}" list="destination-list-1">
                        <datalist id="destination-list-1">
                            <option value="Amsterdam"></option>
                            <option value="Geneva"></option>
                            <option value="Chamonix"></option>
                        </datalist>
                    </div>

                    <div class="event__field-group  event__field-group--time">
                        <label class="visually-hidden" for="event-start-time-1">From</label>
                        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${dayjs(date.startTime).format('DD/MM/YY HH:mm')}">
                        &mdash;
                        <label class="visually-hidden" for="event-end-time-1">To</label>
                        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${dayjs(date.endTime).format('DD/MM/YY HH:mm')}">
                    </div>

                    <div class="event__field-group  event__field-group--price">
                        <label class="event__label" for="event-price-1">
                            <span class="visually-hidden">Price</span>
                            &euro;
                        </label>
                        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}">
                    </div>

                    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                    <button class="event__reset-btn" type="reset">Delete</button>
                    <button class="event__rollup-btn" type="button">
                        <span class="visually-hidden">Open event</span>
                    </button>
                </header>
                <section class="event__details">
                    ${createPointEditOfferTemplate(offer)}

                    <section class="event__section  event__section--destination">
                        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                        <p class="event__destination-description">${description}</p>
                    </section>

                    ${createPointEditPhotoTemplate(img)}
                </section>
            </form>
        </li>`;
}

export {createPointEditTemplate};
