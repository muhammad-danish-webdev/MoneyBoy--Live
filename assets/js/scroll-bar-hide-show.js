const asideBar = document.querySelector(".search-page-aside-bar-section");
let isScrolling;

asideBar.addEventListener("scroll", () => {
  // Add the class to show scrollbar
  asideBar.classList.add("is-scrolling");

  // Clear the timeout if it exists
  window.clearTimeout(isScrolling);

  // Set a timeout to remove the class after 1500ms
  isScrolling = setTimeout(() => {
    asideBar.classList.remove("is-scrolling");
  }, 1500);
});
