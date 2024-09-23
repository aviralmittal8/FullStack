 HEAD
function alrt() {
    
    const firstnameinput = document.getElementById("first-name")
    const lastnameinput = document.getElementById("last-name")
    if (firstnameinput.value == "" || lastnameinput.value == "") {
        alert("Name cannot be empty")
    }
    else {
        console.log(firstnameinput.value)
        console.log(lastnameinput.value)
    }
    const phonenumberinput = getElementById("Phone-Number")
    if (phonenumberinput.value.length > 10 || phonenumberinput.value.length < 10)
    {
        alert("Enter the valid phone number")
    }
    else{
        console.log(phonenumberinput.value)
    }
    const button = document.getElementsByClassName("c-form-btn")
    
}
function ValidateEmail() {
    const emailaddressinput = document.getElementById("email")
    var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

    if (emailaddressinput.value.notmatch(mailformat)) {
        alert("You have entered an invalid email address!");
        document.form1.text1.alrt();
    }
    else {
        alert("You have entered an valid email address!");
        document.form1.text1.alrt();
    }
    const button = document.getElementsByClassName("c-form-btn")
    
}


var checkForm = function (form) {
    if (!form.terms.checked) {
        alert("Please indicate that you accept the Terms and Conditions");
        form.terms.alrt();
        return false;
    }
    return true;
    const button = document.getElementsByClassName("c-form-btn")
}

button.addEventlistener("click", check())
function check(){
    alrt()
    ValidateEmail()
}
function alrt() {
    
    const firstnameinput = document.getElementById("first-name")
    const lastnameinput = document.getElementById("last-name")
    if (firstnameinput.value == "" || lastnameinput.value == "") {
        alert("Name cannot be empty")
    }
    else {
        console.log(firstnameinput.value)
        console.log(lastnameinput.value)
    }
    const phonenumberinput = getElementById("Phone-Number")
    if (phonenumberinput.value.length > 10 || phonenumberinput.value.length < 10)
    {
        alert("Enter the valid phone number")
    }
    else{
        console.log(phonenumberinput.value)
    }
    const button = document.getElementsByClassName("c-form-btn")
    
}
function ValidateEmail() {
    const emailaddressinput = document.getElementById("email")
    var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

    if (emailaddressinput.value.notmatch(mailformat)) {
        alert("You have entered an invalid email address!");
        document.form1.text1.alrt();
    }
    else {
        alert("You have entered an valid email address!");
        document.form1.text1.alrt();
    }
    const button = document.getElementsByClassName("c-form-btn")
    
}


var checkForm = function (form) {
    if (!form.terms.checked) {
        alert("Please indicate that you accept the Terms and Conditions");
        form.terms.alrt();
        return false;
    }
    return true;
    const button = document.getElementsByClassName("c-form-btn")
}

button.addEventlistener("click", check())
function check(){
    alrt()
    ValidateEmail()
}
