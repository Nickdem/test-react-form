function validateName(name) {
  if (!/^[a-zа-яё\-\s]+$/i.test(name)) return 'name'
};

function validateEmail(email) {
  const re = /[a-z0-9*_-]+(?:\.[a-z0-9_-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  if (!re.test(email.toLowerCase())) return 'email'
};

function validatePhone(tel) {
  const re = /^[\-\()\+\d]+$/;
  if (!re.test(tel) || (tel.replace(/\D+/g, "").length !== 11)) return 'tel'
};

export function inputsValidate(value, type) {
  if (value.trim() === '') return 'trim'
  if (type === 'text') return validateName(value)
  if (type === 'email') return validateEmail(value)
  if (type === 'tel') return validatePhone(value)
};