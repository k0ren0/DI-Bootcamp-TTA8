// // Exercice 4 : Volume Of A Sphere

document.getElementById("MyForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const radius = parseFloat(document.getElementById("radius").value);

    if (!isNaN(radius)) {
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        document.getElementById("volume").value = volume.toFixed(2);
    } else {
        alert("Enter a valid number.");
    }
});
