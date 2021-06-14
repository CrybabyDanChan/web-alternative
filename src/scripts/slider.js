window.addEventListener('load', () => {
  const slider = document.querySelector('.slider');
  const track = slider.querySelector('.slider__track');
  const prevButton = slider.querySelector('.slider__prev');
  const nextButton = slider.querySelector('.slider__next');
  const items = slider.querySelectorAll('.slider__item');
  const limit = items.length -1;
  let index = 0;

  const getStep = () => items[0].clientWidth;

  const handlePrevClick = (event) => {
    index -= 1;

    if (index < 0) {
      index += 1;
      return;
    }

    const step = getStep();
    const position = step * index;

    event.preventDefault();
    track.style.transform = `translateX(${-position}px)`;
  };

  const handleNextClick = (event) => {
    index += 1;

    if (index > limit) {
      index -= 1;
      return;
    }

    const step = getStep();
    const position = step * index;

    event.preventDefault();
    track.style.transform = `translateX(${-position}px)`;
  };

  prevButton.addEventListener('click', handlePrevClick);
  nextButton.addEventListener('click', handleNextClick );
});
