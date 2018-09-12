var titles = [];
var forenames = [];
var surnames = [];

var randomTitle;

var limit = 0;

var surnamesJSON = "https://frogletapps.github.io/Name_Generator/json/surnames.json";
var titlesJSON = "https://frogletapps.github.io/Name_Generator/json/titles.json";

//Get titles from JSON
$.getJSON("https://frogletapps.github.io/Name_Generator/json/titles.json", 
    function(jsonTitles){
        $.each(jsonTitles, function(i, field){
            titles.push(field);
        });
    }
);

//Get forenames from JSON
$.getJSON("https://frogletapps.github.io/Name_Generator/json/forenames.json", 
    function(jsonForenames){
        $.each(jsonForenames, function(i, field){
            forenames.push(field);
        });
    }
);

//Get surnames from JSON
$.getJSON("https://frogletapps.github.io/Name_Generator/json/surnames.json", 
    function(jsonSurnames){
        $.each(jsonSurnames, function(i, field){
            surnames.push(field);
        });
    }
);

function getValues(jsonUrl){
    var data = [];      //Array to store the JSON data in
    var randomChoice;   //Number in the array to pick
    var result;         //Result

    $.getJSON(jsonUrl, 
        function(jsonData){
            $.each(jsonData, function(i, field){
                data.push(field);
            });
            //Length of the JSON array
            var jsonLength = Object.keys(jsonData).length
            //Number in the array to pick
            randomChoice = random(jsonLength - 1);
            console.log(randomChoice + 1);
            console.log(data[randomChoice].value);
            result = data[randomChoice].value;
            //This is a nasty hack but it will work for testing
            randomTitle = result;
            console.log(randomTitle);
        }
    );
    console.log(result);
    return result;
}

//Generates a random number between 0 and the limit
function random(limit){
    return Math.round(Math.random()*limit);
}

//Choose a random name
function choose(){
    //Get a random title/name from the list
    getValues(titlesJSON);
    //var randomTitle = getValues(titlesJSON);
    var randomForename = forenames[random(forenames.length-1)];
    var randomSurname = surnames[random(surnames.length-1)];
    //Output it
    document.getElementById("name").innerHTML = randomTitle + " " + randomForename + " " + randomSurname;
}