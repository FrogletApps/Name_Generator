var titles = [];
var forenames = [];
var surnames = [];

var titlesJsonUrl = "https://frogletapps.github.io/Name_Generator/json/titles.json";
var forenamesJsonUrl = "https://frogletapps.github.io/Name_Generator/json/forenames.json";
var surnamesJsonUrl = "https://frogletapps.github.io/Name_Generator/json/surnames.json";

readJsonValues(titlesJsonUrl, titles);
readJsonValues(forenamesJsonUrl, forenames);
readJsonValues(surnamesJsonUrl, surnames);

//Get values from the JSON files
function readJsonValues(url, output){
    $.getJSON(url, function(json){
        $.each(json, function(i, field){
            output.push(field);
        });
    });
}

//Pick random values from the jsonData arrays
function randomArrayValues(titlesArray, forenamesArray, surnamesArray){
    //Number in each array to pick
    var randomTitle = random(titlesArray.length);
    var randomForename = random(titlesArray.length);
    var randomSurname = random(titlesArray.length);

    return titlesArray[randomTitle].value + " " + forenamesArray[randomForename].value + " " + surnamesArray[randomSurname].value;
}

//Generates a random number between 0 and (limit - 1)
//This is because the input is always the length which includes the 0th value
function random(limit){
    return Math.round(Math.random()*(limit - 1));
}

//Choose a random name
function choose(){
    document.getElementById("name").innerHTML = randomArrayValues(titles, forenames, surnames);
}