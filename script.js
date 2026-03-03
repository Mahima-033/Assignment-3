const header=document.getElementsByClassName("header-el")[0];
const input=document.querySelector("#text");
const button=document.querySelector(".btn");

button.addEventListener("click",function () {
    let name= input.value;
    if (name === "") {
        header.innerText = "Hello";
    } else {
        header.innerText = "Hello, " + name + "!";
});

const red=document.querySelector(".red");
red.addEventListener("click",function(){
    red.style.backgroundColor = "red";
    red.style.color = "white";
})

const blue=document.querySelector(".blue");
blue.addEventListener("click",function(){
    blue.style.backgroundColor = "blue";
    blue.style.color = "white";
})

const green=document.querySelector(".green");
green.addEventListener("click",function(){
    green.style.backgroundColor = "green";
    green.style.color = "white";

})

const yellow=document.querySelector(".yellow");
yellow.addEventListener("click",function(){
    yellow.style.backgroundColor = "yellow";
    yellow.style.color = "white";
})




