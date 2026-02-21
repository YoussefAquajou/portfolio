// FILE: script.js
// script.js - small client-side behaviors for the portfolio
// set the copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// handle contact form submission (client-side only)
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', function (e) {
  // prevent default submit to keep this purely client-side
  e.preventDefault();

  // gather form data
  const data = {
    name: document.getElementById('name').value.trim(),
    email: document.getElementById('email').value.trim(),
    message: document.getElementById('message').value.trim(),
  };

  // basic validation check
  if (!data.name || !data.email || !data.message) {
    status.textContent = 'Please fill all fields.';
    return;
  }

  // simulate sending (replace with real API call if you have one)
  status.textContent = 'Sending message...';

  // small timeout to mock async behavior
  setTimeout(() => {
    status.textContent = 'Thanks — your message has been received (demo).';
    form.reset();
  }, 900);
});
