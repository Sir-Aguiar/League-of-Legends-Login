const inputs = document.querySelectorAll(".login-input")
const login_button = document.querySelector(".login-button")
inputs.forEach(input => {
  input.addEventListener('focus', ({ target }) => {
    const span = target.previousElementSibling
    span.classList.add("label-active")
  })
  input.addEventListener('focusout', ({ target }) => {
    const span = target.previousElementSibling
    if (target.value === "") span.classList.remove("label-active")
  })
  input.addEventListener('input', () => {
    const [name, pass] = inputs
    if (name.value && pass.value.length >= 8) return login_button.removeAttribute('disabled')
    login_button.setAttribute('disabled', "")
  })
})
