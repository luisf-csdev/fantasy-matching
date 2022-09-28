const FRONT = "card_front"
const BACK = "card_back"
const CARD = "card"
const ICON = "icon"

startMatchGame();

function startMatchGame() {
    initializeCards(logic.createCardsFromGames());
}

function initializeCards() {
    let gameBoard = document.getElementById("gameBoard")
    gameBoard.innerHTML = '';
    logic.cards.forEach(card => {

        let cardElement = document.createElement('div');
        cardElement.id = card.id;
        cardElement.classList.add(CARD);
        cardElement.dataset.icon = card.icon;

        createCardContent(card, cardElement);

        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);

    })

}

function createCardContent(card, cardElement) {

    createCardFace(FRONT, card, cardElement);
    createCardFace(BACK, card, cardElement);

}

function createCardFace(face, card, element) {

    let cardElementFace = document.createElement('div');
    cardElementFace.classList.add(face);
    if (face === FRONT) {
        let iconElement = document.createElement('img')
        iconElement.classList.add(ICON);
        iconElement.src = "./assets/images/" + card.icon + ".png";
        cardElementFace.appendChild(iconElement);
    }
    element.appendChild(cardElementFace);
}

function flipCard() {

    if (logic.setCard(this.id)) {

        this.classList.add("flip");
        if (logic.secondCard) {
            if (logic.checkMatch()) {
                logic.clearCards();
                if(logic.checkGameOver()) {
                    let gameOverLayer = document.getElementById("gameOver");
                    setTimeout(() => {
                        gameOverLayer.style.display = 'flex';
                    }, 100);
                }
            } else {
                setTimeout(() => {
                    let firstCardView = document.getElementById(logic.firstCard.id);
                    let secondCardView = document.getElementById(logic.secondCard.id);

                    firstCardView.classList.remove('flip');
                    secondCardView.classList.remove('flip');
                    logic.unflipCards();
                }, 1000);

            }
        }
    }
}

function restartGame() {
    logic.clearCards();
    startMatchGame();
    let gameOverLayer = document.getElementById("gameOver");
    gameOverLayer.style.display = 'none';
}

// insert a victory music!
// insert a movement counter (every time you flip a pair of cards, is a new movement)
// insert a "best score" ranking (lesser movements) and storage with local data