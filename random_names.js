var titles = [];
var forenames = [];
var surnames = [];

var titlesJsonUrl = "https://frogletapps.github.io/Random_Names/json/titles.json";
var forenamesJsonUrl = "https://frogletapps.github.io/Random_Names/json/forenames.json";
var surnamesJsonUrl = "https://frogletapps.github.io/Random_Names/json/surnames.json";

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
    var randomForename = random(forenamesArray.length);
    var randomSurname = random(surnamesArray.length);

    var rareTitleChance = 0.5;
    var rareTitlePick = Math.random();

    //If the gender of the title and firstname don't match OR the title is too rare then pick a new title
    while (titlesArray[randomTitle].gender != "N" && 
           titlesArray[randomTitle].gender != forenamesArray[randomForename].gender ||
           (titlesArray[randomTitle].rare == true && rareTitleChance <= rareTitlePick)){
                randomTitle = random(titlesArray.length);
    }
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

//Ensures that the page can work offline
UpUp.start({
    "content-url": "random_names.html",
    "assets":[
        "json/forenames.json",
        "json/surnames.json",
        "json/titles.json",
        "random_names.js"
    ]
});