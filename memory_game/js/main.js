console.log("Up and running!");

const cards = [
	"queen",
	"queen",
	"king",
	"king"
];

const cardsInPlay = [

];

let cardOne = cards[3];
cardsInPlay.push(cardOne);

console.log("User first flipped " + cardOne);

let cardTwo = cards[2];
cardsInPlay.push(cardTwo);

console.log("User next flipped " + cardTwo);

if (cardsInPlay.length === 2) {
	switch (cardsInPlay[0] === cardsInPlay[1]) {
		case true:
			alert("You found a match!");
			break;
		case false:
			alert("Sorry, try again.");
			break;
		default:
			alert("an error occurred");
	}
}