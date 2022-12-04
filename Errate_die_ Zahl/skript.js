count=0;
//Die Benutzereingabe wird geprüft 
	function checkNumber() {
	var guess = parseInt(inputGuess.value);


	if (guess < number)
	outputResult.innerHTML  = "Dein Tipp war zu niedrig.";

    else if(isNaN(guess))
	outputResult.innerHTML = "Bitte keine Buchstaben eingeben";
    else if(guess >100) 
	outputResult.innerHTML = "Zahlen bitte nur bis 100 eingeben";
	else if (guess > number)
	outputResult.innerHTML  = "Dein Tipp war zu hoch.";
	else if (guess == number)
	outputResult.innerHTML  = "Treffer! Glückwunsch";	
	count = count +1
	outputCount.innerHTML = "Du hast bisher " + count + " Versuche gebraucht.";
}
	
		
//Das Spiel setzt alles zurück und startet neu 		
	function newGame() {
		
	inputGuess.value = "";
	outputResult.innerHTML = "";
	outputCount.innerHTML = "";
}


