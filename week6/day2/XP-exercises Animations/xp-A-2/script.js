// // Exercise 2 : Move The Box

function myMove() {
    const container = document.getElementById("container");
    const animate = document.getElementById("animate");

    let currentPosition = 0;

    const intervalId = setInterval(() => {
        currentPosition++;
        animate.style.left = currentPosition + "px";

        if (currentPosition + animate.offsetWidth >= container.offsetWidth) {
            clearInterval(intervalId);
        }
    }, 1);
}