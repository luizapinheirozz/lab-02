/* slider de curiosidades dos personagens */
const cards = document.querySelectorAll(".guests__card");
const cardsContainer = document.querySelector(".guests__cards");
const prevBtn = document.querySelector(".guests__button--left");
const nextBtn = document.querySelector(".guests__button--right");

let currentIndex = 0;

function updateSlider() {
  const offset = -currentIndex * 100;
  cardsContainer.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  updateSlider();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % cards.length;
  updateSlider();
});

updateSlider();

/* função de mostrar a programação do evento */
const btnSchedule = document.getElementById("btn-schedule");
const divSchedule = document.getElementById("schedule-hidden");

btnSchedule.addEventListener("click", () => {
  divSchedule.classList.remove("schedule__hidden");
  btnSchedule.style.display = "none";
});
