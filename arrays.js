console.log("poop");

//Challenge1
var test = "racecar";

var opp = test.split("").reverse().join("")

if(test === opp){
    console.log(true);
} else{
    console.log(false);
}

//example

var animal = ["fish", "dog", "cat"];
var animalzElement = document.getElementById("animalz");

for (var i=0; i<animal.length; i++){
    console.log(animal[i]);
    //animalzElement.innerHTML += "<h5>" +
}

//challenge 3

var book1 = "Catch 22"
var book2 = "Slaughterhouse 5"
var book3 = "Fahrenheit 451"

var Arr = book1.replace(/\D/g, "")
for(var j=0; j<Arr.length; j++){
    console.log(Arr[j])
}

var book = "catch 22";
var bookSplit = book.split("");
var realNum = [];
for(k=0; k<bookSplit.length; k++){
    if(+bookSplit[k]){
        realNum.push(bookSplit[k]);
    }
}
console.log(realNum.join(""))

