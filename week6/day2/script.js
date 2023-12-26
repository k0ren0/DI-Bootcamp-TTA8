// function inform() {
//     alert("I've been clicked !")
// }


// Функция для вставки новой строки в таблицу
// function insertRow() {
//     const table = document.querySelector("table")
//     const tds=document.querySelectorAll(tr).length
//     const newRow=document.createElement("tr")
//     const td1=document.createElement("td")
//     const td2=document.createElement("td")

//     td1.innerText=`Row${trs + 1}, cell1`;
//     td2.innerText=`Row${trs + 1}, cell2`;
//     newRow.append(td1, td2);
//     table.append(newRow);
// }

// function insertRow() {
//     const table = document. querySelector ("table");
//     const trs = document-querySelectorA11("tr").length;
//     console. log(document.querySelectorAll("tr"));
//     const newRow = document.createElement("tr");
//     const td1 = document.createElement("td");
//     const td2 = document.createElement("td");
//     td1. innerText = Row${trs + 1} cell1;
//     td2. innerText = Row$(trs + 1) cell2;
//     newRow. append (td1, td2);
//     table. append (newRow) ;

// }

// Add Event Listener




    // let x = document.getElementById("btn")
    // let y = document.getElementById("btn1")


    // function RespondClick() { 
    //     alert("Button Clicked")
    // } 

    // function RespondMouseOver() { 
    //     alert("My mouse is over the btn")
    // } 

    // function RespondMouseOut() { 
    //     alert("My mouse is out of the btn")
    // }   

    // btn.addEventListener(`click`, RespondClick);
    // btn.addEventListener(`mouseover`, RespondMouseOver);
    // btn.addEventListener(`mouseout`, RespondMouseOut);

    // btn1.addEventListener(`mouseover`, RespondMouseOver);
    // btn1.addEventListener(`mouseout`, RespondMouseOut);

    // const styleButton = document.getElementById("jsstyle");

    // // Event listener to change background color on mouseover
    // styleButton.addEventListener("mouseover", function() {
    //     styleButton.style.backgroundColor = "lightblue";
    // });
    
    // // Event listener to change background color on mouseout
    // styleButton.addEventListener("mouseout", function() {
    //     styleButton.style.backgroundColor = ""; // Reset to default
    // });
    
    // // Event listener to change text color on click
    // styleButton.addEventListener("click", function() {
    //     styleButton.style.color = "red";
    // });
    
    // let x = document.getElementById("btn")
    // let y = document.getElementById("div")
    // let z = document.getElementById("section")

    // x.addEventListener("click", XRespondClick); 
    // y.addEventListener("click", YRespondClick); 
    // z.addEventListener("click", ZRespondClick); 

    // function XRespondClick(e) { 
    //     alert("BTN is Clicked")
    // }    

    // function YRespondClick(e) { 
    //     alert("DIV is Clicked")
    // }    

    //  function ZRespondClick(e) { 
    //     alert("SECTION is Clicked")
    // }  


    // let x = document.getElementById("btn")
    // let y = document.getElementById("div")
    // let z = document.getElementById("section")

    // x.addEventListener("click", XRespondClick); 
    // y.addEventListener("click", YRespondClick); 
    // z.addEventListener("click", ZRespondClick); 

    // function XRespondClick(e) { 
    //     alert("BTN is Clicked")
    // }    

    // function YRespondClick(e) { 
    //     alert("DIV is Clicked")
    //     e.stopPropagation()
    // }    

    // function ZRespondClick(e) { 
    //     alert("SECTION is Clicked")
    // }  

    // let form = document.forms.my;

    // form.addEventListener("submit", getUserComments)

    // function getUserComments(e){
    //   e.preventDefault()
    //   alert('submit ! ')
    // }

    // const form  = document.getElementsByTagName('form')[0];
    // const email = document.getElementById("mail");
    // const name = document.getElementById("name");

    // email.addEventListener("input", function (event) {
    //   if (email.validity.typeMismatch) {
    //     email.setCustomValidity("I am expecting an e-mail address!");
    //   } else {
    //     email.setCustomValidity("");
    //   }
    // });

    // form.addEventListener("submit", function (event) {
    //   if(!email.validity.valid) {
    //       email.setCustomValidity("I am expecting an e-mail address!");
    //   } else {
    //       email.setCustomValidity("");
    //   }
    // });


    // function sayHi(phrase, who) {
    //   alert( phrase + ', ' + who );
    // }
    
    // // setTimeout(sayHi, 1000, "Hello", "John"); //  calls sayHi() after one second --> Hello, John 


    // let id = setTimeout(sayHi, 3000, "Viktor");

    // const button = document.querySelector("button");
    // button.addEventListener("click", function () {
    //   clearTimeout(id)
    // })

    // // Exercise1

    // const div = document.querySelector("div");
    // console.log(div);

    // setTimeout(function () {
    //   div.style.display = "block";
    // }) 5000);


// Interval 

//     setInterval(function() {
//       // Do something every 5 seconds
// }, 5000);

// const div = document. querySelector ("div");

// let intervalid = setInterval(function () {
//   if (div.style.display == "none") {
//     div.style.display = "block";
//   } else {
//     div.style.display = "none";
//   }
// }, 4000);

// const button = document. querySelector ("button");
// button. addEventListener ("click", function () {
// clearInterval(intervalId);
// });

// const banner = document.querySelector("#banner");
// const stopButton = document.querySelector("#stopButton");
// let secondsRemaining = 10;

// function updateBanner() {
//   banner.textContent = `The sales end in ${secondsRemaining} sec !`;
// }

// function countdown() {
//   updateBanner();
//   secondsRemaining--;

//   if (secondsRemaining < 0) {
//     clearInterval(intervalId);
//     banner.textContent = "Sales have ended!";
//   }
// }

// let intervalId = setInterval(countdown, 1000);

// stopButton.addEventListener("click", function() {
//   clearInterval(intervalId);
//   banner.textContent = "Countdown stopped.";
// });

let num = 10;
let id=setInterval(function () {
  if (num == -1) {
    clearInterval(id);
    div.innerText = `Times Up!!!`;
  } else {
    div.innerText = `Time left: ${num}`;
    num--;
  }
}, 1000);