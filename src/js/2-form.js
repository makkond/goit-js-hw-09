const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

function saveFormData() {
  formData.email = formData.email.trim();
  formData.message = formData.message.trim();

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function loadFormData() {
  const savedData = localStorage.getItem('feedback-form-state');

  if (savedData) {
    const parsedData = JSON.parse(savedData);

    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';

    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
}

function clearFormAndStorage() {
  localStorage.removeItem('feedback-form-state');

  formData.email = '';
  formData.message = '';

  form.reset();
}

form.addEventListener('input', event => {
  const { name, value } = event.target;

  formData[name] = value;

  saveFormData();
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email.trim() || !formData.message.trim()) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  clearFormAndStorage();
});

document.addEventListener('DOMContentLoaded', loadFormData);
