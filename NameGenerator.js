//This are test fields, they shouldn't last long
var names = ["John Smith", "Jane Smith"];
//var names2 = ["John Jones", "Jane Jones"];

var limit = 0;

//Generates a random number between 0 and the limit
function random(limit){
    return Math.round(Math.random()*limit);
}

//Choose a random name
function choose(){
    //Get a random name from the list
    var randomName = names[random(names.length-1)];
    //Output it
    document.getElementById("name").innerHTML = randomName;
}