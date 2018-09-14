var titles = [];
var forenames = [];
var surnames = [];

var randomTitle;

var limit = 0;

var titlesJsonUrl = "https://frogletapps.github.io/Name_Generator/json/titles.json";
var forenamesJsonUrl = "https://frogletapps.github.io/Name_Generator/json/forenames.json";
var surnamesJsonUrl = "https://frogletapps.github.io/Name_Generator/json/surnames.json";

//Get titles from JSON
$.getJSON(titlesJsonUrl, 
    function(titlesJson){
        $.each(titlesJson, function(i, field){
            titles.push(field);
        });
    }
);

//Get forenames from JSON
$.getJSON(forenamesJsonUrl,
    function(forenamesJson){
        $.each(forenamesJson, function(i, field){
            forenames.push(field);
        });
    }
);

//Get surnames from JSON
$.getJSON(surnamesJsonUrl, 
    function(surnamesJson){
        $.each(surnamesJson, function(i, field){
            surnames.push(field);
        });
    }
);

//Pick a random value from the jsonData
function getValues(jsonData){
    //Length of the JSON array
    var jsonLength = Object.keys(jsonData).length;
    console.log(jsonLength);
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
    var randomTitle = getValues(titles);
    var randomForename = getValues(forenames);
    var randomSurname = getValues(surnames);
    //Output it
    document.getElementById("name").innerHTML = randomTitle + " " + randomForename + " " + randomSurname;
}