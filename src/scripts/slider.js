window.addEventListener('load', () => {
  const slider = document.querySelector('.slider');
  const track = slider.querySelector('.slider__track');
  const prevButton = slider.querySelector('.slider__prev');
  const nextButton = slider.querySelector('.slider__next');
  const items = slider.querySelectorAll('.slider__item');
  const limit = items.length -1;
  const positionBreakpoint = 992;
  let index = 0;

  const getStep = () => items[0].clientWidth;

  const clearActiveItem = () => {
    const activeItem = slider.querySelector('.slider__item_active');

    if (!activeItem) {
      return;
    }

    activeItem.classList.remove('slider__item_active');
  };

  const setPosition = () => {
    const step = getStep();
    const position = step * index;
    const currentItem = items[index];
    const isPosition = window.innerWidth < positionBreakpoint;

    clearActiveItem();

    if (isPosition) {
      track.style.transform = `translateX(${-position}px)`;
    }

    currentItem.classList.add('slider__item_active');
  };

  const handlePrevClick = (event) => {
    index -= 1;

    if (index < 0) {
      index += 1;
      return;
    }

    event.preventDefault();
    setPosition();
  };

  const handleNextClick = (event) => {
    index += 1;

    if (index > limit) {
      index -= 1;
      return;
    }

    event.preventDefault();
    setPosition();
  };

  prevButton.addEventListener('click', handlePrevClick);
  nextButton.addEventListener('click', handleNextClick );
  setPosition();
});
