import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

galleryList.addEventListener('click', onImgClick);

galleryList.insertAdjacentHTML('beforeend', renderGalleryList(galleryItems));

function renderGalleryList(gallery) {
  return gallery
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`
    )
    .join('');
}

function onImgClick(e) {
  e.preventDefault();

  if (!e.target.classList.contains('gallery__image')) {
    return;
  }

  const instance = basicLightbox.create(`
      
       <img src=${e.target.dataset.source}>

  `);

  instance.show();

  document.body.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      instance.close();
    }
  });
}
