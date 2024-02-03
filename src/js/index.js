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
    renderPhoto(data);
  });
});

function searchPhoto(searchedImage) {
  const BASE_URL = 'https://pixabay.com/api/';
  const PARAMS = `?key=42185111-4f5cd61d4ffab1c12875fcbb6&q=${searchedImage}&image_type=photo&orientation=horizontal&safesearch=true`;
  const url = BASE_URL + PARAMS;

  return fetch(url).then(res => res.json());
}

function photoTemplate(photo) {
  return `<div>
  <div class="image-container">
    <img
      src="${photo.hits.webformatURL}"
      alt="#"
      
    />
  </div>
  <div>

      Likes:${photo.hits.likes}, Views:${photo.hits.views}, Comments:${photo.hits.comments}, Downloads:${photo.hits.downloads}
    </p>
  </div>
</div>`;
}

function renderPhoto(photo) {
  const markup = photoTemplate(photo);
  photoContainer.insertAdjacentHTML('beforeend', markup);
}

// {
//   webformatURL,
//   largeImageURL,
//   tags,
//   likes,
//   views,
//   comments,
//   downloads,
// }
