export function passwordValidator(password) {
    if (!password) return "La contraseña no puede estar vacía."
    if (password.length < 8) return 'Password must be at least 8 characters long.'
    return ''
  }  