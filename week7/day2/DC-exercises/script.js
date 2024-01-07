function submitForm() {
  var name = document.getElementById('name').value;
  var lastName = document.getElementById('lastname').value;

  var formData = {
      name: name,
      lastName: lastName,
  };

  var jsonString = JSON.stringify(formData, null, 2);

  document.getElementById('output').innerText = jsonString;
}