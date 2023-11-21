document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.querySelector(".mobile-menu-button");
  const mobileMenu = document.querySelector(".mobile-menu");

  mobileMenuButton.addEventListener("click", function () {
    if (mobileMenu.classList.contains("open")) {
      mobileMenu.classList.remove("open");
      fadeOut(mobileMenu); // Call the fadeOut function
    } else {
      mobileMenu.classList.add("open");
      fadeIn(mobileMenu); // Call the fadeIn function
    }
    mobileMenuButton.classList.toggle("open");
  });

  // Close the mobile menu when clicking outside of it
  document.addEventListener("click", function (event) {
    if (
      !mobileMenu.contains(event.target) &&
      !mobileMenuButton.contains(event.target)
    ) {
      if (mobileMenu.classList.contains("open")) {
        mobileMenu.classList.remove("open");
        fadeOut(mobileMenu); // Call the fadeOut function
        mobileMenuButton.classList.remove("open");
      }
    }
  });

  // Fade-in animation function
  function fadeIn(element) {
    element.style.display = "flex";
    element.style.animation = "fadeIn 0.8s ease-in-out";
    element.style.opacity = "1";
  }

  // Fade-out animation function
  function fadeOut(element) {
    element.style.animation = "fadeOut 0.3s ease-in-out";
    element.style.opacity = "0";

    // After the animation, hide the element
    setTimeout(function () {
      element.style.display = "none";
    }, 300); // Adjust the time to match the animation duration
  }
});


// Get references to the div and input elements
const lineBreaksContainer = document.getElementById('line-breaks');

// Function to insert line breaks based on data attributes
function insertLineBreaks() {
    const desktopLineBreaks = parseInt(lineBreaksContainer.getAttribute('data-desktop-no'));
    const mobileLineBreaks = parseInt(lineBreaksContainer.getAttribute('data-mobile-no'));

    // Clear existing content
    lineBreaksContainer.innerHTML = '';

    // Insert line breaks based on data attributes
    for (let i = 0; i < desktopLineBreaks; i++) {
        lineBreaksContainer.innerHTML += '<br>';
    }

    if (window.innerWidth < 768) { // Only on mobile
        for (let i = 0; i < mobileLineBreaks; i++) {
            lineBreaksContainer.innerHTML += '<br>';
        }
    }
}

// Call the function initially and whenever the window is resized
insertLineBreaks();
window.addEventListener('resize', insertLineBreaks);
