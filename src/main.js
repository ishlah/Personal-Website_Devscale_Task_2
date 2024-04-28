import Splide from "@splidejs/splide";

const splide = new Splide(".splide", {
  type: "loop",
  padding: "5rem",
  perPage: 3,
});

splide.mount();

const Typed = require("typed.js");
const typed = new Typed("#element", {
  strings: [
    "^1000👋 Hello! Welcome to my website. ^1000 I'm Muhamad Akhlishil Ishlah.",
  ],
  typeSpeed: 50,
  loop: true,
  showCursor: false,
});

const btnSend = document.getElementById("btnSend");
const confetti = require("canvas-confetti");

btnSend.addEventListener("click", () => {
  const myCanvas = document.createElement("canvas");
  myCanvas.style.width = "100vw";
  myCanvas.style.height = "100vh";
  myCanvas.style.position = "fixed";
  myCanvas.style.inset = 0;
  myCanvas.style.zIndex = 9999;

  document.body.appendChild(myCanvas);

  const myConfetti = confetti.create(myCanvas, {
    resize: true,
    useWorker: true,
  });
  myConfetti({
    particleCount: 150,
    spread: 100,
  });
});
