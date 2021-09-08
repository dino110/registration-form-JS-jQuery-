$(document).ready(() => {
  const $email = $("#email");
  const $password = $("#password");
  const $passwordConfirm = $("#password-confirm");
  const $regBtn = $("#reg-btn");
  const $togglePassword = $("#togglePassword");
  const $toggleConfPassword = $("#toggleConfPassword");

  let emailIsValid = false;
  let passwordIsValid = false;
  let confirmPassIsValid = false;

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{3,}$/;
  const mailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  $email.keyup(() => {
    emailIsValid = checkEmail();
  });

  $password.keyup(() => {
    passwordIsValid = checkPassword();
  });

  $passwordConfirm.keyup(() => {
    confirmPassIsValid = checkConfirmedPass();
  });

  // Show/hide password
  $togglePassword.on("click", () => {
    $password.attr(
      "type",
      $password.attr("type") === "password" ? "text" : "password"
    );
    $togglePassword.toggleClass("bi-eye");
  });

  //Show/hide confirm password
  $toggleConfPassword.on("click", () => {
    $passwordConfirm.attr(
      "type",
      $passwordConfirm.attr("type") === "password" ? "text" : "password"
    );
    $toggleConfPassword.toggleClass("bi-eye");
  });

  //Submit form
  $regBtn.on("click", () => {
    submitForm();
  });

  const checkEmail = () => {
    if (!mailRegex.test($email.val().toLowerCase())) {
      $email.removeClass("green").addClass("red");
      return false;
    } else {
      $email.removeClass("red").addClass("green");
      return true;
    }
  };

  const checkPassword = () => {
    if (!passwordRegex.test($password.val())) {
      $password.removeClass("green").addClass("red");
      return false;
    } else {
      $password.removeClass("red").addClass("green");
      return true;
    }
  };

  const checkConfirmedPass = () => {
    if ($passwordConfirm.val() != "" && $password.val() != "") {
      if ($passwordConfirm.val() != $password.val()) {
        $passwordConfirm.removeClass("green").addClass("red");
        return false;
      } else {
        $passwordConfirm.removeClass("red").addClass("green");
        return true;
      }
    }
  };

  const submitForm = () => {
    if (emailIsValid && passwordIsValid && confirmPassIsValid) {
      $regBtn.attr("type", "submit");
      alert("You are registered!");
    } else {
      alert("There is an error!\nPlease check your input values!");
    }
  };
});

//
