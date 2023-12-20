$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});

$(document).ready(function () {
  $(".gallery img").on("click", function () {
    var imgSrc = $(this).attr("src");
    $("#modalImage").attr("src", imgSrc);
  });
});

$(document).ready(function () {
  console.log(1);
  $("#loginForm").submit(function (e) {
    e.preventDefault();

    var username = $("#username").val();
    var password = $("#password").val();

    if (username.trim() === "" || password.trim() === "") {
      alert("Please enter both username and password.");
      return;
    }

    $("#loginModal").modal("hide");
    alert("Login Successfull");
  });
});

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    $("#loginModal").modal("hide");
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var nameError = document.getElementById("nameError");
    var usernameError = document.getElementById("usernameError");
    var passwordError = document.getElementById("passwordError");

    // Simple validation
    if (name.trim() === "") {
      nameError.innerHTML = "Name is required.";
      event.preventDefault();
    } else {
      nameError.innerHTML = "";
    }

    if (username.trim() === "") {
      usernameError.innerHTML = "Username is required.";
      event.preventDefault();
    } else {
      usernameError.innerHTML = "";
    }

    if (password.trim() === "") {
      passwordError.innerHTML = "Password is required.";
      event.preventDefault();
    } else {
      passwordError.innerHTML = "";
    }
  });
