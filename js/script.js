const seiya = document.querySelector(".seiya-action");
const box = document.querySelector(".box-gold");

const jump = () => {
  seiya.classList.add("jump-seiya");

  setTimeout(() => {
    seiya.classList.remove("jump-seiya");
  }, 500);
};

const loopGame = setInterval(() => {

  const boxPosition = box.offsetLeft;
  const seiyaPosition = +window
    .getComputedStyle(seiya)
    .bottom.replace("px", "");

  if (boxPosition <= 120 && boxPosition > 0 && seiyaPosition < 80) {
    box.style.animation = "none";
    box.style.left = `${boxPosition}px`;

    seiya.style.animation = "none";
    seiya.style.bottom = `${seiyaPosition}px`;

    seiya.src = "./img/seiya-fail.gif";

    clearInterval(loopGame);
  }
}, 10);

document.addEventListener("keydown", jump);
