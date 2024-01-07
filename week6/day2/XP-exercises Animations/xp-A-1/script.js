// // Part 1
// function showAlert() {
//     alert("Hello World");
// }

// setTimeout(showAlert, 2000);

// // Part 2
// function addParagraph() {
//     const newParagraph = document.createElement("p");
//     newParagraph.textContent = "Hello World";
//     const container = document.getElementById("container");
//     container.appendChild(newParagraph);
// }

// setTimeout(addParagraph, 2000);

// // Part 3
// function addParagraphInterval() {
//     const newParagraph = document.createElement("p");
//     newParagraph.textContent = "Hello World";
//     newParagraph.classList.add("highlighted"); 
//     const container = document.getElementById("container");
//     container.appendChild(newParagraph);

//     if (container.children.length === 5) {
//         clearInterval(intervalId);
//     }
// }

// const intervalId = setInterval(addParagraphInterval, 2000);

// const button = document.getElementById("clear");

// button.addEventListener("click", function () {
//     clearInterval(intervalId);

//     const container = document.getElementById("container");
//     container.innerHTML = '';
// });

