const main = document.querySelector(".main");
const typeArea = document.querySelector(".typingArea");
const btn = document.querySelector(".btn");

const words = [
  "A day in the life of programmer",
  "What is JavaScript?",
  "What is React?",
  "What is Programming Language?",
  "What's your name?",
  "Where are you from?",
  "This is just random word",
  "What is Remix.js?",
  "New Technologies",
  "Is programming hard?",
  "Why do you wanna become a programmer?",
  "Which programming language you like the most?",
  "What is Golang? and why do you wanna learn it?",
  "What is CSS",
];

const game = {
  start: 0,
  end: 0,
  user: "",
  arrText: "",
};

btn.addEventListener("click", () => {
  if (btn.textContent === "Start") {
    play();
    typeArea.value = "";
    typeArea.disabled = false;
  } else if (btn.textContent === "Done") {
    typeArea.disabled = true;
    main.style.borderColor = "white";
    end();
  }
});

