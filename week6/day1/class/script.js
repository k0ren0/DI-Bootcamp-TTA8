//Forms

// const personform= document.forms.personform;
// const dogform = document.forms.dogform;

// console.log(personform.children.age);
// console.log(dogform);


// let userForm = document.forms[0]
// console.log(userForm.elements.login); // <input name="login" type="text">
// let formFieldset = userForm.elements.userFields;
// console.log(formFieldset);
// <fieldset name="userFields">
//   <legend>info</legend>
//   <input name="login" type="text">
// </fieldset>

// we can get the input by name both from the form and from the fieldset
// console.log(formFieldset.elements.login == userForm.elements.login); // true

// let form = document.forms[0];
// let ageElems = form.elements.age;
// console.log(ageElems)
// // RadioNodeList(2)
// //  0: input
// //  1: input
// //  length: 2
// console.log(ageElems[0].value); // "10"

// let textArea = document.forms[0].comments;
// console.log(textArea.value) // "heyy here is a text"

// const select = document.querySelector("#musicgenre");

// Exercise

const select = document.getElementById ("school-type");
console.log(select.options[1].value);

const option = new Option("Work", "wokr");
select.append(option)

const option2 = new Option("Primary School", "Primary School");

select.insertBefore(option2, select.options[0]);

// // // Исправить!!!
// // select. insertBefore(option2, select.
// options [0]);
// select. prepend (option2);
// for (let i = 0; i ‹ select.options.
// length; i++) {
// if (select.options[i].value ==
// "college") {
// select.options[i].selected = true;
// } else 1
// select.options[i].selected = false;
// ｝


// const option2 = new Option ("Primary School",
// "Primary School");
// select. insertBefore(option2, select.options [0]);




// function performActions() {
//     // Get the value of the 2nd Option
//     const secondOptionValue = document.getElementById('school-type').options[1].value;
//     console.log('Value of the 2nd Option:', secondOptionValue);

//     // Add a new option with the value 'Work' at the end of the select form
//     const workOption = document.createElement('option');
//     workOption.value = 'work';
//     workOption.text = 'Work';
//     document.getElementById('school-type').appendChild(workOption);

//     // Add a new option with the value 'Primary School' at the beginning of the select form
//     const primarySchoolOption = document.createElement('option');
//     primarySchoolOption.value = 'primaryschool';
//     primarySchoolOption.text = 'Primary School';
//     document.getElementById('school-type').insertBefore(primarySchoolOption, document.getElementById('school-type').firstChild);

//     // Change 'College' as selected
//     document.getElementById('school-type').value = 'college';

//     // Alert the choice selected
//     alert('Selected Choice: ' + document.getElementById('school-type').value);
// }
