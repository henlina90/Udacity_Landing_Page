/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

const allSections = document.querySelectorAll("section");
const navList = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

function isScrolledIntoView(el) {
  var rect = el.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;

  // Only completely visible elements return true:
  var isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
  // Partially visible elements return true:
  //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  return isVisible;
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
allSections.forEach((section) => {
  const navListItem = `<li class='menu__link ${section.className}' data-link=${section.id}><a href="#${section.id}">${section.dataset.nav}</li>`;
  navList.insertAdjacentHTML("beforeend", navListItem);
});

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event
navList.addEventListener("click", (e) => {
  e.preventDefault();
  let parent;
  if (e.target.hasAttribute("data-link")) {
    parent = e.target;
  } else {
    parent = e.target.parentElement;
  }
  const elementToScrollTo = document.getElementById(parent.dataset.link);
  elementToScrollTo.scrollIntoView({ block: "end", behavior: "smooth" });
  allSections.forEach((section) => {
    if (parent.dataset.link === section.id) {
      section.classList.add("your-active-class");
    }
  });
});

window.addEventListener("scroll", (e) => {
  e.preventDefault();
  allSections.forEach((section) => {
    if (isScrolledIntoView(section)) {
      section.classList.add("your-active-class");
    } else if (
      section.classList.contains("your-active-class") &&
      !isScrolledIntoView(section)
    ) {
      section.classList.remove("your-active-class");
    }
  });
});
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
