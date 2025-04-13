const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network :D";
link.href = "https://developer.mozilla.org";

const sect = document.querySelector("section");

const paragraph = document.createElement("p");
paragraph.innerText = "We hope you enjoyed the ride.";

sect.appendChild(paragraph);

const text = document.createTextNode(
    " — the premier source for web development knowledge.",
);

const linkPara = document.querySelector("p");
linkPara.appendChild(text);

sect.appendChild(paragraph);

// sect.removeChild(paragraph);
// paragraph.remove();
//paragraph.parentNode.removeChild(paragraph);
// paragraph.style.color = "white";
// paragraph.style.backgroundColor = "black";
// paragraph.style.padding = "10px";
// paragraph.style.width = "250px";
// paragraph.style.textAlign = "center";
paragraph.setAttribute("class", "highlight");
  