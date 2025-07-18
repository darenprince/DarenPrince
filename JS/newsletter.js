// Basic newsletter form handler
// Validates email fields and prevents submission if empty

document.addEventListener('DOMContentLoaded', function () {
  const forms = document.querySelectorAll('#subscribe-form, form[name="newsletter"]');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  forms.forEach(form => {
    form.addEventListener('submit', function (e) {
      const emailInput = form.querySelector('input[type="email"]');
      const emailValue = emailInput ? emailInput.value.trim() : '';
      if (!emailValue || !emailRegex.test(emailValue)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
      }
    });
  });
});
