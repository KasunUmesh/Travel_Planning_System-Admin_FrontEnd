// Login Text Field Validation

function loginFieldValidation() {
  const email = $("#adminEmail").val();
  const password = $("#adminPassword").val();

  if (email == "") {
    $("#emailError").css("display", "block");
    $("#adminEmail").css("border-color", "#e72438");
  }

  if (password == "") {
    $("#passwordError").css("display", "block");
    $("#adminPassword").css("border-color", "#e72438");
  }
}

$(document).ready(function () {
  $("#adminEmail").on("input", function () {
    var email = $("#adminEmail").val();
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    var matchResult = email.match(pattern);

    if (matchResult) {
      $("#emailError").css("display", "none");
      $("#adminEmail").css("border", "2px solid rgba(255, 255, 255, .2)");
    } else {
      $("#emailError").css("display", "block");
      $("#adminEmail").css("border-color", "#e72438");
    }
  });

  $("#adminPassword").on("input", function () {
    var email = $("#adminPassword").val();

    if (email == "") {
      $("#passwordError").css("display", "block");
      $("#adminPassword").css("border-color", "#e72438");
    } else {
      $("#passwordError").css("display", "none");
      $("#adminPassword").css("border", "2px solid rgba(255, 255, 255, .2)");
    }
  });
});

// Admin Login Function

var loginBaseUrl = "http://localhost:8083/travelPlanning/admin/adminlogin";

$("#adminLoginBtn").click(function () {
  loginFieldValidation();
  adminLogin();
});

function adminLogin() {
  var data = {
    adminEmail: $("#adminEmail").val(),
    adminPassword: $("#adminPassword").val(),
  };

  console.log(data);

  $.ajax({
    url: loginBaseUrl,
    method: "POST",
    data: JSON.stringify(data),
    dataType: "json",
    contentType: "application/json",
    success: function (res) {
      if (res.status == true) {
        console.log("Login success");
        window.location.href = "registerForm.html";
      } else {
        console.log("Error");
      }

      console.log(res);
      console.log(res.status);
    },
    error: function (ob) {
      alert(ob.responseJSON.message);
    },
  });
}
