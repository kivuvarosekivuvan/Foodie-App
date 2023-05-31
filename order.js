let make=new Typed('.make',{
    strings:[` an Order`, `a good choice with us`, ],
    typedSpeed:100,
    backSpeed:100,
    backDelay:200,
    loop:true
})
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var quantity = document.getElementById("quantity").value;
    var address = document.getElementById("address").value;

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    if (email === "") {
        alert("Please enter your email.");
        return false;
    }
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!email.match(emailRegex)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (password === "") {
        alert("Please enter your password.");
        return false;
    }
    if (password.length < 6) {
        alert("Password should be at least 6 characters long.");
        return false;
    }

    if (quantity === "") {
        alert("Please enter the quantity.");
        return false;
    }
    if (isNaN(quantity)) {
        alert("Please enter a valid quantity.");
        return false;
    }

    if (address === "") {
        alert("Please enter your address.");
        return false;
    }

    return true;
}