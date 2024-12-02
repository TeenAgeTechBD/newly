function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  // Determine AM/PM
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format and handle 0 as 12 for midnight
  hours = hours % 12; // Convert to 12-hour format (0-11)
  hours = hours === 0 ? 12 : hours; // If hours is 0 (midnight), set it to 12

  // Update the clock display
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;

  // Display AM/PM
  document.getElementById('ampm').textContent = ampm;
}

// Update the clock every second
setInterval(updateClock, 1000);
updateClock(); // Initialize clock immediately
