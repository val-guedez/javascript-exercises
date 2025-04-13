const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "chicken jockey...";

container.appendChild(content);

const paragraph = document.createElement("p");
paragraph.textContent = "Hey I'm red :)";
paragraph.style.color = "red";
container.appendChild(paragraph);

const heading = document.createElement("h3");
heading.textContent = "I'm a blue h3!!";
heading.style.color = "blue";
container.appendChild(heading);

const dressToImpress = document.createElement("div");
dressToImpress.style.borderStyle = "solid";
dressToImpress.style.borderColor = "black";
dressToImpress.style.backgroundColor = "pink";


const innerHeading = document.createElement("h1");
innerHeading.innerText = "I'm inside a div?";
dressToImpress.appendChild(innerHeading);

const innerParagraph = document.createElement("p");
innerParagraph.innerText = "ME TOO!";
dressToImpress.appendChild(innerParagraph);

container.appendChild(dressToImpress);

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    btn.style.backgroundColor = "red";
});

btn.addEventListener("click", function (e) {
    console.log(e.target);
});

btn.addEventListener("dblclick", () => {
    alert("CHICKEN JOCKEY!");
});

btn.addEventListener("click", function (e) {
    alert("I...am STEVE");
});

btn.addEventListener("mouseenter", () => {
    alert("Nuh-uh!");
});