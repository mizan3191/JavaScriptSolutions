console.clear();
const form = document.querySelector("form");

const username = form.querySelector("div #name-id");

const email = form.querySelector("div #email-id");
const password = form.querySelector("div #password-id");
console.log(username);
form.addEventListener("submit", formHandler);

function formHandler(event){
    console.log("submit");
}