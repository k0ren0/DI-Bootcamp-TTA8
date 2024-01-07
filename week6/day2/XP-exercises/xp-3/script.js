// // Exercise 3 : Transform The Sentence

// 1

let allBoldItems;

// 2
function getBoldItems() {
  const paragraph = document.querySelector('p');
  
  const boldElS = paragraph.querySelectorAll('strong');

  const boldTexts = Array.from(boldElS).map(element => element.textContent);

  allBoldItems = boldTexts;
}

getBoldItems();
console.log(allBoldItems);

// 3
function highlight() {
    const boldElements = document.querySelectorAll('strong');
  
    boldElements.forEach(element => {
      element.style.color = 'blue';
    });
  }

highlight();

// 4
function returnItemsToDefault() {
    
    const boldElements = document.querySelectorAll('strong');
  
    boldElements.forEach(element => {
      element.style.color = 'black';
    });
  }

// 5
const paragraph = document.querySelector('p');
paragraph.addEventListener('mouseover', highlight);

paragraph.addEventListener('mouseout', returnItemsToDefault);