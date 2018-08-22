//This are test fields, they shouldn't last long
var titles = ["Capt", "Cmdr", "Col", "Cpl", "Dr", "Gen", "Hon", "Lady", "Lord", "Lt", "Lt Col", "Maj", "Master", "Miss", "Mr", "Miss", "Mr", "Mrs", "Ms", "Prof", "Pvt", "Rev", "Rt Hon", "Sgt"]
var forenames = ["John", "Jane"];
var surnames = ["Smith", "Jones"];

var limit = 0;

//Generates a random number between 0 and the limit
function random(limit){
    return Math.round(Math.random()*limit);
}

//Choose a random name
function choose(){
    //Get a random title/name from the list
    var randomTitle = titles[random(titles.length-1)];
    var randomForename = forenames[random(forenames.length-1)];
    var randomSurname = surnames[random(surnames.length-1)];
    //Output it
    document.getElementById("name").innerHTML = randomTitle + " " + randomForename + " " + randomSurname;
}