const div = document.getElementById(`container`);
console.log(div);


const peteItem = document.getElementById('peteItem');
if (peteItem) {
  peteItem.textContent = 'Richard';
}

// Delete the second <li> of the second <ul>
const secondUl = document.querySelector('.list.student_list:not(.university)');
if (secondUl) {
  const secondLi = secondUl.querySelector('li:nth-child(2)');
  if (secondLi) {
    secondLi.remove();
  }
}

// Change the name of the first <li> of each <ul> to your name (using a loop)
const allLists = document.querySelectorAll('.list.student_list li');
allLists.forEach((li, index) => {
  li.textContent = 'YourName';
});

// Add a “light blue” background color and some padding to the <div>
containerDiv.style.backgroundColor = 'lightblue';
containerDiv.style.padding = '10px';

// Do not display the <li> that contains the text node “Dan”
const danLi = document.querySelector('.list.student_list.university li:last-child');
if (danLi) {
  danLi.style.display = 'none';
}

// Add a border to the <li> that contains the text node “Richard”
const richardLi = document.getElementById('peteItem');
if (richardLi) {
  richardLi.style.border = '1px solid black';
}

// Change the font size of the whole body
document.body.style.fontSize = '18px';