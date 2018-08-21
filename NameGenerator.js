//Generates a random number between 0 and 1
function random(){
    return Math.random();
}

function choose(){
    document.getElementById("name").innerHTML = random();
}