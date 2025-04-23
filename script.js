function createExt(logo, name, desc) {
  let html = `
    <div class="extContainer">
    <div class="extContainerHeader">
        <img src="${logo}" class="extLogo">
        <div class="extText">
            <h2>${name}</h2>
            <p>${desc}</p>
        </div>
    </div>
    <div class="extButton">
        <button>Remove</button>
        <button class="togg"></button>
    </div>
</div>`;
  document.querySelector(".container").innerHTML += html;
}

document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.querySelector(".toggleButton");
  const themeIcon = themeToggle.querySelector("img");

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Optional: toggle dark class on other elements
    document.querySelectorAll(".extContainer").forEach(card => card.classList.toggle("dark"));
    document.querySelector(".bar").classList.toggle("dark");
    document.querySelector(".header").classList.toggle("dark");

    // Switch icon
    if (document.body.classList.contains("dark")) {
      themeIcon.src = "assets/images/icon-sun.svg"; // your light mode icon
      themeIcon.alt = "Switch to Light Mode";
    } else {
      themeIcon.src = "assets/images/icon-moon.svg"; // your dark mode icon
      themeIcon.alt = "Switch to Dark Mode";
    }
  });
});


function setupToggles() {
  const toggles = document.querySelectorAll(".togg");
  toggles.forEach((toggle) => {
    toggle.addEventListener("click", function () {
      toggle.classList.toggle("active");
      filterExtensions(currentFilter);
    });
  });
}

function filterExtensions(filter) {
  const cards = document.querySelectorAll(".extContainer");
  cards.forEach((card) => {
    const toggle = card.querySelector(".togg");
    const isActive = toggle.classList.contains("active");

    if (
      filter === "all" ||
      (filter === "active" && isActive) ||
      (filter === "inactive" && !isActive)
    ) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}

let currentFilter = "all";

document.addEventListener("DOMContentLoaded", function () {
  // Create all extensions
  createExt("assets/images/logo-devlens.svg", "DevLens", "Quickly inspect page layouts and visualize element boundaries.");
  createExt("assets/images/logo-style-spy.svg", "StyleSpy", "Instantly analyze and copy CSS from any webpage element.");
  createExt("assets/images/logo-speed-boost.svg", "SpeedBoost", "Optimizes browser resource usage to accelerate page loading.");
  createExt("assets/images/logo-json-wizard.svg", "JSONWizard", "Formats, validates, and prettifies JSON responses in-browser.");
  createExt("assets/images/logo-tab-master-pro.svg", "TabMaster Pro", "Organizes browser tabs into groups and sessions.");
  createExt("assets/images/logo-viewport-buddy.svg", "ViewportBuddy", "Simulates various screen resolutions directly within the browser.");
  createExt("assets/images/logo-markup-notes.svg", "Markup Notes", "Enables annotation and notes directly onto webpages for collaborative debugging.");
  createExt("assets/images/logo-grid-guides.svg", "GridGuides", "Overlay customizable grids and alignment guides on any webpage.");
  createExt("assets/images/logo-palette-picker.svg", "Palette Picker", "Instantly extracts color palettes from any webpage.");
  createExt("assets/images/logo-link-checker.svg", "LinkChecker", "Scans and highlights broken links on any page.");
  createExt("assets/images/logo-dom-snapshot.svg", "DOM Snapshot", "Capture and export DOM structures quickly.");
  createExt("assets/images/logo-console-plus.svg", "ConsolePlus", "Enhanced developer console with advanced filtering and logging.");

  // Setup toggles and filters
  setupToggles();

  document.querySelectorAll(".barButton").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentFilter = btn.textContent.toLowerCase(); // "all", "active", "inactive"
      filterExtensions(currentFilter);
      document.querySelectorAll(".barButton").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
});
