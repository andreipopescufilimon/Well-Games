document.querySelector('.scroll-down').addEventListener('click', function(e) {
  e.preventDefault(); // Prevent the default link behavior

  scrollDownPixelByPixel(200, 5); // Adjust the total pixels and interval as needed
});

function scrollDownPixelByPixel(totalPixels, interval) {
  const scrollInterval = setInterval(function() {
    if (totalPixels <= 0) {
      clearInterval(scrollInterval);
    } else {
      window.scrollBy(0, 5); // Scroll by 1 pixel at a time
      totalPixels--;
    }
  }, interval);
}
