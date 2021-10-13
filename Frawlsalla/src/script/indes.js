$(".toggle").on("click", function () {
    $(".toggle").parent().toggleClass('active');
});

//validation for register form

function validateForm() {
    var username = document.forms["register"]["usrname"].value;
    var email = document.forms["register"]["email"].value;
    var password = document.forms["register"]["psw"].value;
    var gender = document.forms["register"]["gender"].value;
    var checkbox = document.forms["register"]["checkbox"];

    if (username == "") {
        alert("name must be filled out");
        return false;
    }
    if (email == "") {
        alert("email must be filled complete");
        return false;
    }
    if (!email.includes("@") || !email.includes(".com")) {
        alert("email not complete");
        return false;
    }
    if (password == "") {
        alert("Password must be filled out");
        return false;
    }
    if (!gender) {
        alert("Choose a gender !!");
        return false;
    }
    if (!checkbox.checked) {
        alert("You haven't agree with our terms & conditions");
        return false;
    }
    else {
        alert("Thanks for registering")
        return true
    }




}