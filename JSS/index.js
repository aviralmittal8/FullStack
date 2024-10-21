// const div = document.getElementsByClassName('parent');

// if (div.length > 0) {
//     div[0].innerHTML = '<h2 style="color:red">ABES Engineering College</h2>';
// }

// const h1 = document.createElement("h1");
// h1.innerHTML = "Element is created by DOM Method";
// h1.style.backgroundColor = 'red';
// div[0].appendChild(h1);

// const img = document.createElement("img");
// img.src = "C:\Users\avira\Downloads\Signature.jpg"; 
// img.setAttribute("height", "200px");
// div[0].appendChild(img);

// const button = document.getElementById("btn");
// const disp = document.getElementById("disp");

// function getdata() {
//     console.log("Calling Get Data Function");
//     disp.innerHTML = "Welcome to CSE Department";
// }

// button.addEventListener("click", getdata);

const promise = new Promise((resolve, reject) => {
    let a = 2;
    if (a < 100) {
        console.log("Resolve");
        resolve("noce!"); e
    } else {
        console.log("Reject");
        reject("Error!"); 
    }
});

promise
    .then((msg) => console.warn("Danger fat gya Code", msg))
    .catch((err) => console.log(err));