// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchForm = document.querySelector('.js-search-form');
const photoContainer = document.querySelector('.js-photo-container');

searchForm.addEventListener('submit', e => {
  e.preventDefault();

  const name = e.target.elements.query.value;

  searchPhoto(name).then(data => {
    renderPhoto(data.hits);
  });
});

function searchPhoto(searchedImage) {
  const BASE_URL = 'https://pixabay.com/api/';
  const PARAMS = `?key=42185111-4f5cd61d4ffab1c12875fcbb6&q=${searchedImage}&image_type=photo&orientation=horizontal&safesearch=true`;
  const url = BASE_URL + PARAMS;

  return fetch(url).then(res => console.log(res));
}

function photoTemplate({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `<div class="hero-card card">
  <div class="image-container">
    <img
      src="${webformatURL}"
      alt="#"
      class="hero-image"
    />
  </div>
  <div class="hero-body">
    <p class="hero-bio">
      Likes:${likes}, Views:${views}, Comments:${comments}, Downloads:${downloads}
    </p>
  </div>
</div>`;
}

function renderPhoto(photo) {
  const markup = photoTemplate(photo);
  photoContainer.insertAdjacentHTML('beforeend', markup);
}
