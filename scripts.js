// This script is just a placeholder for now

document.getElementById('post-trip-form').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("Submitted trip details!");
  });
  
  document.getElementById('find-ride-form').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("Searching for rides!");
  });
  
  window.onload = function() {
    // Array of pastel colors
    const pastelColors = ["pastel-blue", "pastel-green", "pastel-yellow", "pastel-pink"];
    // Randomly select a pastel color from the array
    const randomColor = pastelColors[Math.floor(Math.random() * pastelColors.length)];
    // Apply the randomly selected pastel color as the background color
    document.body.classList.add(randomColor);
}
