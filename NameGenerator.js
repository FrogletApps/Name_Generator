var titles = [];
var forenames = [];
var surnames = [];

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
    $.getJSON(jsonData, 
        function(jsonData){
            //Length of the JSON array
            var jsonLength = Object.keys(jsonData).length
            //Number in the array to pick
            var randomChoice = random(jsonLength - 1);

            var name = jsonData(randomChoice).value;
            return name;
        }
    );
}

//Generates a random number between 0 and the limit
function random(limit){
    return Math.round(Math.random()*limit);
}

//Choose a random name
function choose(){
    //Get a random title/name from the list
    var randomTitle = getValues(titlesJSON);
    var randomForename = forenames[random(forenames.length-1)];
    var randomSurname = surnames[random(surnames.length-1)];
    //Output it
    document.getElementById("name").innerHTML = randomTitle + " " + randomForename + " " + randomSurname;
}