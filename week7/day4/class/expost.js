async function submitForm() {
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    const user = { name, username, email };

    try {
      const response = await fetch('https://users-18kl.onrender.com/userjson', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const userData = await response.json();

      // Display the user information
      const userListDiv = document.getElementById('userList');
      userListDiv.innerHTML = `Name: ${userData.name}, Username: ${userData.username}, Email: ${userData.email}`;
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }
  

  async function case2(data) {
    try {
      let z = await Promise.reject("Some reason");
      console.log("Data:", data)
    } 
    catch(e) {
      console.error("in the catch", e); 
    }
  }
  
