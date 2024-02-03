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

  return fetch(url).then(res => {
    if (res.status === 404) {
      throw new Error(response.status);
    } else {
      return res.json();
    }
  });
}

function photoTemplate(photo) {
  return photo.hits
    .map(
      photo => `<li class="gallery-item"><a class="gallery-link" href="${photo.largeImageURL}">
    <img
      src="${photo.webformatURL}"
      data-source="${photo.largeImageURL}"
      alt="${photo.tags}"
      class="gallery-image"
      
    /></a>  

  <div class="image-stats">
<p>
      Likes:${photo.likes}, Views:${photo.views}, Comments:${photo.comments}, Downloads:${photo.downloads}
    </p>
  </div></li>`
    )
    .join('');
}

function renderPhoto(photo) {
  const markup = photoTemplate(photo);
  photoContainer.insertAdjacentHTML('beforeend', markup);
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
