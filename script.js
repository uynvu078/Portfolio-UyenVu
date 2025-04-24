
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function toggleProject(button) {
  const allCards = document.querySelectorAll('.project-card');

  allCards.forEach(card => {
    if (card !== button.closest('.project-card')) {
      card.classList.remove('open');
    }
  });

  button.closest('.project-card').classList.toggle('open');
}