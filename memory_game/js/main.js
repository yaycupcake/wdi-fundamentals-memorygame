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
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

const gameBoard = document.querySelector('#game-board');

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
				alert("You found a match!");
				break;
			case false:
				console.log("Sorry, try again.");
				alert("Sorry, try again.");
				break;
			default:
				console.log("an error occurred");
				alert("an error occurred");
		}
	}	
}

function flipCard() {

	let cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);

	console.log("User flipped " + cards[cardId].rank);

	cardsInPlay.push(cards[cardId]);


	checkForMatch();

}




//

const createBoard = () => {
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.className = 'card';
		cardElement.addEventListener('click', flipCard);
		gameBoard.appendChild(cardElement);
	}
}

createBoard();