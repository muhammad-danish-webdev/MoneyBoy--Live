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
