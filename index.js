import "./style.css";

const PIXEL_COLOR = "#e44d4d";

const fakeCanvas = document.querySelector(".fake-canvas");
const flexRows = fakeCanvas.querySelectorAll(".flex-row");

const config = {
  0: [],
  1: [1, 2, 3, 5, 7, 9],
  2: [1, 3, 5, 7, 9],
  3: [1, 3, 5, 6, 9],
  4: [1, 3, 5, 7],
  5: [1, 2, 3, 5, 7, 9],
  6: []
};

let walker = document.createTreeWalker(flexRows[1], NodeFilter.SHOW_ELEMENT);
let counter = 0;

for (let i = 0; i < flexRows.length; i++) {
  walker = document.createTreeWalker(flexRows[i], NodeFilter.SHOW_ELEMENT);

  while (walker.nextNode()) {
    if (config[i].includes(counter)) {
      walker.currentNode.classList.add("pixel-dot");
    }

    counter++;
  }
  counter = 0;
}
