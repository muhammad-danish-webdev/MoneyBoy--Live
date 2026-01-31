document.addEventListener("DOMContentLoaded", () => {
  const contentDropdowns = document.querySelectorAll(".content-filter-card");
  const langWrapper = document.querySelector(".lang-filter-wrapper");
  const langListContainer = langWrapper?.querySelector(
    ".custom-select-list-container",
  );

  // --- 1. Global Close Function (Sab kuch band karne ke liye) ---
  function closeAllEverywhere() {
    // Content filter cards band karein
    contentDropdowns.forEach((card) => {
      card.classList.remove("is-open");
      const container = card.querySelector(".custom-select-list-container");
      if (container) container.style.height = "0px";
    });

    // Language wrapper band karein
    if (langWrapper) {
      langWrapper.classList.remove("is-open");
      if (langListContainer) langListContainer.style.height = "0px";
    }
  }

  // --- 2. Content Filter Cards Logic ---
  contentDropdowns.forEach((card) => {
    const listContainer = card.querySelector(".custom-select-list-container");

    card.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = card.classList.contains("is-open");

      // Pehle sab kuch band karein (Language wala bhi aur doosre cards bhi)
      closeAllEverywhere();

      // Agar ye pehle band tha, to ab ise khol dein
      if (!isOpen) {
        card.classList.add("is-open");
        if (listContainer) {
          listContainer.style.height = `${listContainer.scrollHeight}px`;
        }
      }
    });
  });

  // --- 3. Language Filter Logic ---
  if (langWrapper) {
    langWrapper.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = langWrapper.classList.contains("is-open");

      // Pehle sab kuch band karein (Content cards bhi aur ye khud bhi)
      closeAllEverywhere();

      // Agar band tha to khol dein
      if (!isOpen) {
        langWrapper.classList.add("is-open");
        if (langListContainer) {
          langListContainer.style.height = `${langListContainer.scrollHeight}px`;
        }
      }
    });
  }

  // --- 4. Window Click (Kahin bhi bahar click ho to sab band) ---
  window.addEventListener("click", () => {
    closeAllEverywhere();
  });
});

// Search Page Filter Menu Item Dropdown

// document.addEventListener("DOMContentLoaded", () => {
//   // Tamam filter menu items ko select karein
//   const filterItems = document.querySelectorAll(".filter-menu-item");

//   filterItems.forEach((item) => {
//     // Har item ke andar uska specific panel (button) aur dropdown dhundein
//     const panel = item.querySelector(".filter-menu-panel");
//     const dropdown = item.querySelector(
//       ".custom-select-options-dropdown-wrapper",
//     );

//     panel.addEventListener("click", (e) => {
//       // 1. Agar aap chahte hain ke ek khulne par dusra band ho jaye (Accordion style),
//       // to niche wali 3 lines ka comment hata dein:
//       /*
//             filterItems.forEach(otherItem => {
//                 if (otherItem !== item) {
//                     otherItem.querySelector('.custom-select-options-dropdown-wrapper').classList.remove('active');
//                 }
//             });
//             */

//       // 2. Sirf clicked item ke dropdown par 'active' class toggle karein
//       dropdown.classList.toggle("active");

//       // Event bubbling ko rokne ke liye taake document click trigger na ho
//       e.stopPropagation();
//     });
//   });

//   // Dropdown ke andar click karne par dropdown band NA ho
//   const allDropdowns = document.querySelectorAll(
//     ".custom-select-options-dropdown-wrapper",
//   );
//   allDropdowns.forEach((dropdown) => {
//     dropdown.addEventListener("click", (e) => {
//       e.stopPropagation();
//     });
//   });

//   // Screen par kahin bhi bahar click karne par khula hua dropdown band ho jaye
//   document.addEventListener("click", () => {
//     allDropdowns.forEach((dropdown) => {
//       dropdown.classList.remove("active");
//     });
//   });
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const filterItems = document.querySelectorAll(".filter-menu-item");

//   filterItems.forEach((item) => {
//     const panel = item.querySelector(".filter-menu-panel");
//     const dropdown = item.querySelector(
//       ".custom-select-options-dropdown-wrapper",
//     );

//     panel.addEventListener("click", (e) => {
//       // Click hone par event ko mazeed upar jane se rokein
//       e.stopPropagation();

//       // Check karein ke kya current dropdown pehle se active hai
//       const isActive = dropdown.classList.contains("active");

//       // --- YE HAI MAIN LOGIC ---
//       // Pehle tamam dropdowns se 'active' class remove kar dein
//       document
//         .querySelectorAll(".custom-select-options-dropdown-wrapper")
//         .forEach((dw) => {
//           dw.classList.remove("active");
//         });

//       // Agar pehle active nahi tha, to ab active kar dein
//       // (Isse click-to-open aur click-to-close dono kaam karenge)
//       if (!isActive) {
//         dropdown.classList.add("active");
//       }
//     });
//   });

//   // Dropdown ke andar click karne se dropdown band na ho
//   document
//     .querySelectorAll(".custom-select-options-dropdown-wrapper")
//     .forEach((dropdown) => {
//       dropdown.addEventListener("click", (e) => {
//         e.stopPropagation();
//       });
//     });

//   // Screen par kahin bhi bahar click karne se active dropdown band ho jaye
//   document.addEventListener("click", () => {
//     document
//       .querySelectorAll(".custom-select-options-dropdown-wrapper")
//       .forEach((dw) => {
//         dw.classList.remove("active");
//       });
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const filterItems = document.querySelectorAll(".filter-menu-item");

  filterItems.forEach((item) => {
    const panel = item.querySelector(".filter-menu-panel");
    const dropdown = item.querySelector(
      ".custom-select-options-dropdown-wrapper",
    );

    panel.addEventListener("click", (e) => {
      e.stopPropagation();

      // Check karein ke ye specific item pehle se active hai ya nahi
      const isActive = item.classList.contains("active");

      // 1. Pehle TAMAM items aur dropdowns se active class hata dein (Accordion effect)
      filterItems.forEach((el) => {
        el.classList.remove("active"); // Item se hataya (SVG rotation reset)
        const dw = el.querySelector(".custom-select-options-dropdown-wrapper");
        if (dw) dw.classList.remove("active"); // Dropdown band kiya
      });

      // 2. Agar clicked item pehle active nahi tha, to ab use active kar dein
      if (!isActive) {
        item.classList.add("active"); // Isse SVG rotate hoga (-45deg)
        dropdown.classList.add("active"); // Isse dropdown khulega
      }
    });
  });

  // Dropdown ke andar click karne par band na ho
  document
    .querySelectorAll(".custom-select-options-dropdown-wrapper")
    .forEach((dropdown) => {
      dropdown.addEventListener("click", (e) => e.stopPropagation());
    });

  // Bahar click karne par sab band kar dein
  document.addEventListener("click", () => {
    filterItems.forEach((el) => {
      el.classList.remove("active");
      const dw = el.querySelector(".custom-select-options-dropdown-wrapper");
      if (dw) dw.classList.remove("active");
    });
  });
});

// Advanced Filter Wrapper Container JS Logic
const filterWrapper = document.querySelector(
  ".aside-bar-advanced-filter-wrapper",
);
const filterList = document.querySelector(".aside-bar-advanced-filter-list");

filterWrapper.addEventListener("click", () => {
  // Check karein ke list pehle se khuli hai ya nahi
  const isOpen = filterList.style.maxHeight;

  if (isOpen && isOpen !== "0px") {
    // Agar khuli hai to band kar do
    filterList.style.maxHeight = "0px";
  } else {
    // Agar band hai to scrollHeight use karke smoothly kholo
    filterList.style.maxHeight = filterList.scrollHeight + "px";
  }
});
