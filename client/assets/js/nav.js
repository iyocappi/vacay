// Get current URL path
const currentPath = window.location.pathname;

// Get all nav links
const navLinks = document.querySelectorAll("#nav-container a");
const dropdownLinks = document.querySelectorAll("#drop-content a");

// Loop through each link and add 'active' class to the matching path
navLinks.forEach((link) => {
  if (link.href.includes(currentPath)) {
    link.classList.add("active");
  }
});

dropdownLinks.forEach((link) => {
  if (link.href.includes(currentPath)) {
    link.classList.add("active");
  }
});

// Function to toggle the dropdown visibility
function toggleDropdown() {
  document.getElementById("drop-content").classList.toggle("show");
}
