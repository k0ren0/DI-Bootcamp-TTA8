// // Exercise 1 : Change The Article

// // 1
// const h1 = document.querySelector(`article h1`);
// console.log(h1.innerText);

// // 2
// const pRemove = document.querySelector(`article p:last-child`);
// if (pRemove) {
//     pRemove.remove();
// } else {
//         console.log("Paragraph not found!")
// }

// // 3
// const h2 = document.getElementsByTagName('h2');
// for (let i = 0; i < h2.length; i++) {
//     h2[i].addEventListener('click', function() {
//         h2[i].style.backgroundColor = 'red';
//     });
// }

// // 4
// const h3 = document.querySelector('article h3');
// if (h3) {
//     h3.addEventListener('click', function() {
//         h3.style.display = 'none';
//     });
// }


// // 5
// const boldButton = document.getElementById('boldButton');
// boldButton.addEventListener('click', function() {
//     const paragraphs = document.querySelectorAll('article p');
//     paragraphs.forEach(paragraph => {
//         // I'm add toggle bold text on and off
//         paragraph.style.fontWeight = (paragraph.style.fontWeight === 'bold') ? 'normal' : 'bold';
//     });
// });


// // Exercise 2 : Work With Forms

