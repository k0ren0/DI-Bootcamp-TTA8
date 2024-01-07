let formvalues = {}

function handleInput (e) {
    formvalues.name = e.target.value;
    console.log(formvalues);
}

function handleInputPassword(e) {
    formvalues.password = e.target.value;
    console.log(formvalues);
}