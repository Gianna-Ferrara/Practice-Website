function titleChange() {
    document.title = document.querySelector("input").value;
}
function loading(){
    let ls= localStorage.getItem("counter");
    let ss= sessionStorage.getItem("counter2");
    if(ls){

        document.getElementById("but").innerText = ls

    }
    if(ss){
        document.getElementById("but2").innerText = ss

    }
}

function count(){
let num =JSON.parse(document.getElementById("but").innerText);
   num += 1;
    document.getElementById("but").innerText = num;
    localStorage.setItem("counter",num);
}

function count2(){
    let num =JSON.parse(document.getElementById("but2").innerText);
    num += 1;
    document.getElementById("but2").innerText = num;
    sessionStorage.setItem("counter2",num);
}
//First, get what the button currently says. Then, convert to a number (it will be a string). Add 1. Change what the button says. Set storage.