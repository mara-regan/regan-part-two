let name = prompt("Welcome to GC mini golf! What is your name?");

let holesCount = prompt("Hi, " + name + "! Would you like to play 3 or 6 holes?");

let total = 0;

let holeNumber = [ "1? (par: 3)", "2? (par: 3)", "3? (par: 3)", "4? (par: 3)", "5? (par: 3)", "6? (par: 3)" ]

for (let i = 0; i < holesCount; i++) {
    let puttsCount = Number( prompt("How many putts for hole " + holeNumber[i] ) );
    total += puttsCount;
}

let overNine = total-9;
let underNine = total-9;
let overEighteen = total-18;
let underEighteen = total-18;

if (holesCount === "3") {
   if (total > 9) {
    console.log("Nice try, " + name + "... Your total par was: +" + overNine + ".")
   }
   else if (total === 9) {
    console.log("Good game, " + name + ". Your total par was: 0.")
   }
   else if (total < 9) {
    console.log("Great job, " + name + "! Your total par was: " + underNine + ".")
   }
}

if (holesCount === "6") {
    if (total > 18) {
     console.log("Nice try, " + name + "... Your total par was: +" + overEighteen + ".")
    }
    else if (total === 18) {
     console.log("Good game, " + name + ". Your total par was: 0.")
    }
    else if (total < 18) {
     console.log("Great job, " + name + "! Your total par was: " + underEighteen + ".")
    }
 }