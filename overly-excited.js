console.log('OVERLY EXCITED!!!');


// Create an array that contains the words in the sentence
let sentence = [
    "The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon",
];
let output = "";
let exclamation = "!";

// The addExcitement function should accept the array as the sole argument
function addExcitement(theWordArray) {

    for (i = 0; i < theWordArray.length; i++) {
        let thisWord = theWordArray[i];
        output += " " + thisWord;


        if ((i + 1) % 3 === 0) {
            output += exclamation;
            exclamation += "!";
        }
        console.log(output);
    }
}
// Invoke the function and pass in the array
addExcitement(sentence);