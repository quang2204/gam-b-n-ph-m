document.addEventListener("DOMContentLoaded", function () {
  const registrationForm = document.getElementById("registrationForm");

  registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password === confirmPassword) {
      const successMessage = document.getElementById("successMessage");
      successMessage.style.display = "block";

      localStorage.setItem(
        "username",
        document.getElementById("username").value
      );
      localStorage.setItem("password", password);

      setTimeout(function () {
        window.location.href = "login.html";
      }, 3000);
    } else {
      alert("Mật khẩu không trùng khớp");
    }
  });
});
