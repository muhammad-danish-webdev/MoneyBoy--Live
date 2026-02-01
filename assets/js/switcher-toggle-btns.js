const listBtn = document.querySelector(".list-view-btn");
const gridBtn = document.querySelector(".grid-view-btn");

// List View Button Click
listBtn.onclick = () => {
  listBtn.classList.remove("active"); // List se remove
  gridBtn.classList.add("active"); // Grid mein add
};

// Grid View Button Click
gridBtn.onclick = () => {
  listBtn.classList.add("active"); // List mein add
  gridBtn.classList.remove("active"); // Grid se remove
};

// Search Reset Functionality

document.addEventListener("DOMContentLoaded", () => {
  // 1. Parent container ko select karein
  const searchPanel = document.querySelector(".aside-bar-filter-search-panel");

  // 2. Panel ke andar se SVG (close button) aur Input ko select karein
  const closeBtn = searchPanel.querySelector(".advanced-search-panel-head svg");
  const inputField = searchPanel.querySelector(
    ".advanced-search-panel-input input",
  );

  // 3. Click event lagayein
  closeBtn.addEventListener("click", () => {
    // Input ki value khali kar dein
    inputField.value = "";

    // Optional: Input par focus wapas le aayein
    inputField.focus();
  });
});
