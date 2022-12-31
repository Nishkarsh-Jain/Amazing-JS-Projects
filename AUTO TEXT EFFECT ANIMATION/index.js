const containerEl = document.querySelector(".container");
const careers = ["YouTuber.", "Web Developer.", "Freelancer.", "Instructor."];

let careerIndex = 0;
let char = 0;

updateText();

function updateText() {
  char++;
  containerEl.innerHTML = `<h1>I am ${
    careers[careerIndex].slice(0, 1) === "I" ? "an " : "a "
  }${careers[careerIndex].slice(0, char)}</h1>`;

  if (char === careers[careerIndex].length) {
    char = 0;
    careerIndex++;
  }

  if (careerIndex === careers.length) {
    careerIndex = 0;
  }

  setTimeout(updateText, 300);
}
