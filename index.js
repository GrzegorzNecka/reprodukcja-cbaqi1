import "./style.css";

const PIXEL_COLOR = "#e44d4d";

const fakeCanvas = document.querySelector(".fake-canvas");
const flexRows = fakeCanvas.querySelectorAll(".flex-row");

const mapOfRows = {
  0: [],
  1: [1, 2, 3, 5, 7, 9],
  2: [1, 3, 5, 7, 9],
  3: [1, 3, 5, 6, 9],
  4: [1, 3, 5, 7],
  5: [1, 2, 3, 5, 7, 9],
  6: []
};

const createWalker = (elem) => document.createTreeWalker(
    elem,
    NodeFilter.SHOW_ELEMENT
  );

flexRows.forEach((divElem, i) => {
  const rowsWalker = createWalker(divElem)
  let itemInRow = 0;

  while (rowsWalker.nextNode()) {
    if (mapOfRows[i].includes(itemInRow)) {
      rowsWalker.currentNode.classList.add("pixel-dot");
    }
    itemInRow++;
  }
});
