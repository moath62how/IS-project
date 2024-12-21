document.getElementById('registerForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirmPassword').value.trim();
  const terms = document.querySelector('input[name="terms"]').checked;

  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    alert('Please fill in all fields.');
    return;
  }

  const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (password.length <= 8 || password.length >= 20) {
    alert('Password must be between 8 and 20 characters.');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  if (!terms) {
    alert('You must agree to the terms and conditions.');
    return;
  }

  // If all validations pass, submit the form
  this.submit();
});