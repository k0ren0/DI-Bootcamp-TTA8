/**fetch */

// fetch(orl, {})

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         render(data);
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });


// const getData = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();
//         render(data);
//     } catch (error) {
//         console.log(error);
//     }
// };

// const render = (arr) => {
//     const html = arr.map((item) => {
//         return `<div style="
//             display: inline-block;
//             padding: 20px;
//             margin: 20px;
//             text-align: center;
//             border: 1px solid #000;
//         ">
//             <img src="https://robohash.org/${item.id}?size=150x150" alt="robot">
//             <h2>${item.name}</h2>
//             <h4>${item.username}</h4>
//             <p>${item.email}</p>
//         </div>`;
//     });

//     // Assuming you have an element with id "root" in your HTML where you want to render the data.
//     document.getElementById("root").innerHTML = html.join('');
// };

// const getUser = async () => {
//     const searchInput = document.getElementById("searchInput").value;
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${searchInput}`);
//         const data = await response.json();
//         render(data);
//     } catch (error) {
//         console.log(error);
//     }
// };

// // Initial data load
// getData();


const post = {
    title: 'bla bla bla title11',
    body: '• TTA8 the best class ever',
  };
  
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(post),
  })
    .then((res) => res.json())
    .then((newpost) => console.log(newpost));
  
