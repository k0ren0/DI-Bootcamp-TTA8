document.getElementById("libform").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    let noun = document.getElementById("noun").value;
    let adjective = document.getElementById("adjective").value;
    let person = document.getElementById("person").value;
    let verb = document.getElementById("verb").value;
    let place = document.getElementById("place").value;

    // Check if values are not empty
    if (noun !== "" && adjective !== "" && person !== "" && verb !== "" && place !== "") {
        // Generate and display the story
        const story = `${person} went to the ${place} and ${verb} with a ${adjective} ${noun}.`;
        document.getElementById("story").innerText = story;
    } else {
        // Handle empty values
        console.error("Please fill in all the blanks!");
    }
});
