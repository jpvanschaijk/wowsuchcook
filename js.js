const buttons = document.querySelectorAll('.filters button');
const card = document.querySelectorAll('.card');


buttons.forEach(button => {
button.addEventListener('click', () => {
buttons.forEach(b => b.classList.remove('active'));
button.classList.add('active');


const filter = button.dataset.filter;


cards.forEach(card => {
card.style.display =
filter === 'all' || card.dataset.category === filter
? 'block'
: 'none';
});
});
});

const cards = document.querySelectorAll('.card');
const loadMoreBtn = document.getElementById('loadMore');

const STEP = 6;
let visibleCount = STEP;

// Hide all cards beyond initial step
cards.forEach((card, index) => {
  if (index >= STEP) {
    card.style.display = 'none';
  }
});

loadMoreBtn.addEventListener('click', () => {
  visibleCount += STEP;

  cards.forEach((card, index) => {
    if (index < visibleCount) {
      card.style.display = 'block';
    }
  });

  // Hide button if all cards are visible
  if (visibleCount >= cards.length) {
    loadMoreBtn.style.display = 'none';
  }
});
