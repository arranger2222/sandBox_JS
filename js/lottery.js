const cardsEl = document.querySelectorAll('.card__item');
const cardContainer = document.querySelector('.card__container');

const maxNumber = cardsEl.length - 1;

const randomIndex = randomNumber(maxNumber);
cardsEl[randomIndex].classList.add('winning');

let counter = 0;

cardContainer.addEventListener('click', onCardClickHandler);

function onCardClickHandler(evt) {
  const currentCard = evt.target;
  if (counter < 3) {
    if (!currentCard.classList.contains('winning')) {
      currentCard.classList.add('wrong');
      setTimeout(() => {
        alert(
          3 - counter > 0
            ? `:( Білет без виграшу, спробуй ще, у тебе залишилось ${
                3 - counter
              } спроб`
            : 'Це була остання спроба:(',
        );
      }, 0);
    } else {
      currentCard.classList.add('correct');
      setTimeout(() => {
        alert('Наші вітання, ти переміг!');
      }, 0);
    }

    counter += 1;
  } else {
    cardContainer.innerHTML = '';
  }
}

function randomNumber(max) {
  return Math.floor(Math.random() * (max - 0) + 0);
}
