var titles = [];
var forenames = [];
var surnames = [];

var titlesJsonUrl = "https://frogletapps.github.io/Random_Name_Generator_PWA/json/titles.json";
var forenamesJsonUrl = "https://frogletapps.github.io/Random_Name_Generator_PWA/json/forenames.json";
var surnamesJsonUrl = "https://frogletapps.github.io/Random_Name_Generator_PWA/json/surnames.json";

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

    var genderInput = document.getElementById("genderSelect").value;
    var genderInput2;

    if (genderInput == "N"){
        genderInput = "M";
        genderInput2 = "F";
    }
    else {
        genderInput2 = genderInput;
    }

    var rareTitleChance = 0.4;
    var rareTitlePick = Math.random();

    while (forenamesArray[randomForename].gender != genderInput &&
            forenamesArray[randomForename].gender != genderInput2 &&
            forenamesArray[randomForename].gender != "N"){
            randomForename = random(forenamesArray.length);
            console.log(randomForename);
            console.log("randomForename");
            console.log(forenamesArray[randomForename].gender);
    }

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

//Toggle the visibility of the settings bar
function toggleVisibility(){
    if(document.getElementById("settingsBar").style.display == "none"){
        document.getElementById("settingsBar").style.display = "block";
        document.getElementById("hideButton").value = "Hide";
    }
    else{
        document.getElementById("settingsBar").style.display = "none";
        document.getElementById("hideButton").value = "Show";
    }
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