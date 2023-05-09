const password = document.getElementById("password");
const inputIcon = document.getElementById("inputIcon");
const username = document.getElementById("username");
const myForm = document.getElementById("myForm");
const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");

inputIcon.addEventListener("click", function () {
  const type = password.attributes.type.value;
  if (type === "password") {
    password.attributes.type.value = "text";
    inputIcon.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    password.attributes.type.value = "password";
    inputIcon.classList.replace("fa-eye-slash", "fa-eye");
  }
});

myForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (username.value === "") {
    usernameError.innerText = "Email Alanı Boş Bırakılamaz";
    usernameError.style.visibility = "visible";
    username.focus();
    return false;
  }

  const emailFormat =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  const isValidEmail = username.value.match(emailFormat);
  if (isValidEmail === null) {
    usernameError.innerText = "Email Formatı Yanlış";
    usernameError.style.visibility = "visible";
    username.focus();
    return false;
  }

  if (password.value === "") {
    passwordError.innerText = "Pasword Alanı Boş Geçilemez";
    passwordError.style.visibility = "visible";
    password.focus();
    return false;
  }
  if (password.value.length < 4) {
    passwordError.innerText = "Password Minimum 4 Karakter Olmalıdır";
    passwordError.style.visibility = "visible";
    password.focus();
    return false;
  }

  window.location.href = "anasayfa.html";
});

username.addEventListener("focusout", function () {
  usernameError.style.visibility = "hidden";
});

password.addEventListener("focusout", function () {
  passwordError.style.visibility = "hidden";
});
