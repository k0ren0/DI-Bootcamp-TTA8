const allBooks = [
        {
            title: "Harry Potter",
            author: "JK Rowling",
            img: "https://wizkids.co.il/cdn/shop/products/76813c8d0218cab5137b190541dce431_x700.gif?v=1514210268https://www.steimatzky.co.il/pub/media/catalog/product/cache/054fd023ed4beb824f3143faa6fcc008/0/2/021930818-164078378833806.jpg",
            alreadyRead: true,
        },
        {
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            img: "https://bigamartusax.s3-accelerate.amazonaws.com/2020/07/81jn7LC-m3L._AC_SL1395_-210x210.jpg",
            alreadyRead: false,
        },
    ];

    const listBooksSection = document.querySelector(".listBooks");

    for (let book of allBooks) {
        const div = document.createElement("div");
        const h2 = document.createElement("h2");
        const h3 = document.createElement("h3");
        const img = document.createElement("img");

        h2.innerText = "Title: " + book.title;
        h3.innerText = "Author: " + book.author;
        img.setAttribute("src", book.img);
        img.style.width = "100px";

        div.append(h2, h3, img);
        listBooksSection.append(div);

        if(book.alreadyRead) {
            h2.style.color = "red";
            h3.style.color = "red";
        }
    }



 




 