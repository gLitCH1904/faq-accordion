const popUp = document.querySelectorAll(".pop-up");
const overlay = document.querySelector(".overlay");
const arrow = document.querySelectorAll(".arrow");
const row = document.querySelector(".row");

// document.addEventListener("click", () => {
//   for (let i = 0; i < overlay.length; i++) {
//     overlay[i].classList.toggle("active");
//   }
// });

for (let i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", () => {
    for (let b = 0; b < popUp.length; b++) {
      if (i === b) {
        popUp[b].classList.toggle("active");
        arrow[i].classList.toggle("active");
      }
    }
    overlay.classList.toggle("active");
    row.classList.toggle("active");
  });
}

overlay.addEventListener("click", () => {
  for (let i = 0; i < arrow.length; i++) {
    arrow[i].classList.remove("active");
  }
  for (let b = 0; b < popUp.length; b++) {
    popUp[b].classList.remove("active");
  }
  overlay.classList.remove("active");
});
