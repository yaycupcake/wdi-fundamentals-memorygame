console.log("Up and running!");

const cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamondss.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamondss.png"
	}
];

const cardsInPlay = [

];

const checkForMatch = () => {
	if (cardsInPlay.length === 2) {

		const logCards = (arr) => {
			for (let i = 0; i < arr.length; i++) {
				console.log(arr[i].cardImage);
				console.log(arr[i].suit);
			}
		}
		logCards(cardsInPlay);

		switch (cardsInPlay[0].rank === cardsInPlay[1].rank) {
			case true:
				console.log("You found a match!");
				break;
			case false:
				console.log("Sorry, try again.");
				break;
			default:
				console.log("an error occurred");
		}
	}	
}

const flipCard = (cardId) => {

	console.log("User flipped " + cards[cardId].rank);

	cardsInPlay.push(cards[cardId]);


	checkForMatch();

}

flipCard(0);

flipCard(2);


const compareCards = () => {
	//
}