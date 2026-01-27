// Single Range Input Slider

const slider = document.getElementById("myRange");

slider.oninput = function () {
  const value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background = `linear-gradient(to right, #FFD700 ${value}%, #444 ${value}%)`;

  // Webkit specific track color update
  const style = document.createElement("style");
  style.innerHTML = `.location-custom-input::-webkit-slider-runnable-track { background: linear-gradient(to right, #FFD700 ${value}%, #444 ${value}%) !important; }`;
  document.head.appendChild(style);
};

// Double Range Input Slider

const sliderOne = document.getElementById("slider-1");
const sliderTwo = document.getElementById("slider-2");
const rangeFill = document.getElementById("range-fill");
const minGap = 0;

function updateSlider() {
  // Check karein ke sliders ek dusre ko cross na karein
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    // Agar cross ho rahe hon to purani position par rakhein
    if (event.target.id === "slider-1") {
      sliderOne.value = parseInt(sliderTwo.value) - minGap;
    } else {
      sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
  }

  // Yellow color update karein handles ke beech mein
  const percent1 = (sliderOne.value / sliderOne.max) * 100;
  const percent2 = (sliderTwo.value / sliderTwo.max) * 100;

  rangeFill.style.left = percent1 + "%";
  rangeFill.style.width = percent2 - percent1 + "%";
}

// Initial call taake load hote hi set ho jaye
updateSlider();
