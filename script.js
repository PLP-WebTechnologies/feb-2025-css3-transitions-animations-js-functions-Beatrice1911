const flashcard = document.getElementById("flashcard");
const question = document.getElementById("question");
const answer = document.getElementById("answer");

const cards = [
  { q: "What does HTML stand for?", a: "HyperText Markup Language" },
  { q: "What is the purpose of the <head> element in HTML?", a: "It contains meta-information about the document like the title, links to CSS, scripts, etc." },
  { q: "Which tag is used to create a hyperlink in HTML?", a: "<a>" },
  { q: "Which tag is used to create a paragraph in HTML?", a: "<p>" },
  { q: "How do you create a text input field in HTML?", a: `<input type="text">` },
  { q: "What tag is used to embed an image?", a: "<img>" },
  { q: "Name a tag used to define navigation links.", a: "<nav>"}
];

let current = localStorage.getItem("currentCard") || 0;

question.textContent = cards[current].q;
answer.textContent = cards[current].a;

function flipCard() {
  flashcard.classList.toggle("flipped");
}

function nextCard() {
  flashcard.classList.remove("flipped");

  flashcard.classList.remove("bounce");
  void flashcard.offsetWidth;
  flashcard.classList.add("bounce");

  current = (parseInt(current) + 1) % cards.length;
  question.textContent = cards[current].q;
  answer.textContent = cards[current].a;
  localStorage.setItem("currentCard", current);
}

