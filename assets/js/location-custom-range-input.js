const slider = document.getElementById("myRange");

// Function jo background color ko handle tak fill karega
function handleProgress() {
  const value = slider.value;
  const min = slider.min || 0;
  const max = slider.max || 100;
  const percent = ((value - min) / (max - min)) * 100;

  // Handle tak yellow/orange, baaki grey
  slider.style.background = `linear-gradient(to right, #FECE26 0%, #E5741F ${percent}%, #333 ${percent}%, #333 100%)`;
}

// Jab user slider hilaaye
slider.oninput = handleProgress;

// Page khulne par pehli baar run karein
handleProgress();
// Double Range Input Slider
function updateSlider() {
  // 1. Dono sliders aur progress fill ko select karna
  const slider1 = document.getElementById("slider-1");
  const slider2 = document.getElementById("slider-2");
  const rangeFill = document.getElementById("range-fill");

  // 2. Values ko numbers mein convert karna
  let val1 = parseInt(slider1.value);
  let val2 = parseInt(slider2.value);

  // 3. Masla: Agar slider-1 slider-2 se aage nikal jaye
  // Hum dono ko aik dusre ko cross nahi karne denge
  const minGap = 0; // Aap yahan gap set kar sakte hain (e.g., 5)

  if (val2 - val1 <= minGap) {
    // Agar handle takra rahe hain toh unhein pichli position par rok dena
    // Yeh logic user experience ko smooth banata hai
  }

  // 4. Progress bar (Yellow line) ki position set karna
  // Iska formula: (Kam wali value / Max) * 100
  const percent1 = (val1 / slider1.max) * 100;
  const percent2 = (val2 / slider2.max) * 100;

  // Fill line ki width aur left position calculate karna
  rangeFill.style.left = percent1 + "%";
  rangeFill.style.width = percent2 - percent1 + "%";
}

// Page load hote hi ek baar function run karein taake default values set ho jayein
window.onload = function () {
  updateSlider();
};
