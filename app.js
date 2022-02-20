import people from './data.js';
import getElement from './getElement.js';

const container = getElement('.slide-container');
const prevBtn = getElement('.prev-btn');
const nextBtn = getElement('.next-btn');

console.log(people);

// Set Slides
container.innerHTML = people
  .map((person, slideIndex) => {
    const { img, job, name, text } = person;
    // More Logic Later
    let position = 'next';

    if (slideIndex === 0) {
      position = 'active';
    }

    if (slideIndex === people.length - 1) {
      position = 'last';
    }

    return `<article class="slide ${position}">
          <img
            src="${img}"
            alt="${name}"
            class="img"
          />
          <h4>${name}</h4>
          <p class="title">${job}</p>
          <p class="text">
            ${text}
          </p>
          <div class="quote-icon">
            <i class="fa-solid fa-quote-right"></i>
          </div>
        </article>`;
  })
  .join('');

const startSlider = (type) => {
  const active = document.querySelector('.active');
  const last = document.querySelector('.last');
  let next = active.nextElementSibling;

  if (!next) {
    next = container.firstElementChild;
  }

  active.classList.remove(['active']);
  last.classList.remove(['last']);
  next.classList.remove(['next']);

  if (type === 'prev') {
    active.classList.add('next');
    last.classList.add('active');
    next = last.previousElementSibling;
    if (!next) {
      next = container.lastElementChild;
    }
    next.classList.remove(['next']);
    next.classList.add('last');
    return;
  }
  active.classList.add('last');
  last.classList.add('next');
  next.classList.add('active');
};

setInterval(() => {
  startSlider();
}, 8000);

nextBtn.addEventListener('click', () => {
  startSlider();
});

prevBtn.addEventListener('click', () => {
  startSlider('prev');
});
