document.getElementById("libform").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let noun = document.getElementById("noun").value;
    let adjective = document.getElementById("adjective").value;
    let person = document.getElementById("person").value;
    let verb = document.getElementById("verb").value;
    let place = document.getElementById("place").value;
    
    if (noun !== "" && adjective !== "" && person !== "" && verb !== "" && place !== "") {
        
        const story = `${person} went to the ${place} and ${verb} with a ${adjective} ${noun}.`;
        document.getElementById("story").innerText = story;
    } else {
       
        console.error("Please fill in all the blanks!");
    }
});
