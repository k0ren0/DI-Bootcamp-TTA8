// // Exercise 2 : Work With Forms

// // 1
// const formEl = document.querySelector(`form`);
// console.log(formEl);

// // 2
// const fNameInput = document.getElementById(`fname`);
// const lNameInput = document.getElementById(`lname`);

// console.log(fNameInput);
// console.log(lNameInput);

// // 3
// const firstNameInput = document.getElementsByName(`firstname`)[0];
// const lastNameInput = document.getElementsByName(`lastname`)[0];

// console.log(firstNameInput);
// console.log(lastNameInput);

// // 4

// document.getElementById('userForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     let [firstName, lastName] = [document.getElementById('fname').value.trim(), document.getElementById('lname').value.trim()];
//     let ul = document.querySelector('.usersAnswer');

//     if (firstName !== '' && lastName !== '') {
      
//       let liFirstName = document.createElement('li');
//       liFirstName.textContent = `First name: ${firstName}`;

//       let liLastName = document.createElement('li');
//       liLastName.textContent = `Last name: ${lastName}`;

//       ul.appendChild(liFirstName);
//       ul.appendChild(liLastName);
//     } else {
//       alert('Fill in both first and last name.');
//     }
//   });
