import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
galleryList.insertAdjacentHTML('beforeend', renderCardList(galleryItems));

function renderCardList(gallery) {
  return gallery.map(
    ({ original, preview, description }) => `<li>
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`
  );
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

document.body.style.backgroundColor = 'grey';
