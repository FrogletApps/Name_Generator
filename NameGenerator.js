var titles = [];
var forenames = [];
var surnames = [];

var randomTitle;

var limit = 0;

var titlesJsonUrl = "https://frogletapps.github.io/Name_Generator/json/titles.json";
var forenamesJsonUrl = "https://frogletapps.github.io/Name_Generator/json/forenames.json";
var surnamesJsonUrl = "https://frogletapps.github.io/Name_Generator/json/surnames.json";

readJsonValues(titlesJsonUrl, titles);
readJsonValues(forenamesJsonUrl, forenames);
readJsonValues(surnamesJsonUrl, surnames);

//Get values from JSON
function readJsonValues(url, output){
    $.getJSON(url, function(json){
        $.each(json, function(i, field){
            output.push(field);
        });
    });
}

//Pick a random value from the jsonData array
function randomArrayValues(jsonData){
    //Length of the JSON array
    var jsonLength = Object.keys(jsonData).length;
    //Number in the array to pick
    var randomChoice = random(jsonLength - 1);
    return jsonData[randomChoice].value;
}

//Generates a random number between 0 and the limit
function random(limit){
    return Math.round(Math.random()*limit);
}

//Choose a random name
function choose(){
    //Get a random title, forname, and surname from the list
    var randomTitle = randomArrayValues(titles);
    var randomForename = randomArrayValues(forenames);
    var randomSurname = randomArrayValues(surnames);
    //Output it
    document.getElementById("name").innerHTML = randomTitle + " " + randomForename + " " + randomSurname;
}