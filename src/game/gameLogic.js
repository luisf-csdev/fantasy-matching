let logic = {

    lockMode: false,
    firstCard: null,
    secondCard: null,

    items: [
        'armor',
        'arrow',
        'chest',
        'crown',
        'hat',
        'key',
        'potion',
        'shield',
        'staff',
        'sword'],

    cards: null,

    setCard: function (id) {

        let card = this.cards.filter(card => card.id === id)[0];
        if (card.flipped || this.lockMode) {
            return false;
        }

        if (!this.firstCard) {
            this.firstCard = card;
            this.firstCard.flipped = true;
            return true;
        } else {
            this.secondCard = card;
            this.secondCard.flipped = true;
            this.lockMode = true;
            return true;
        }

    },

    checkMatch: function () {
        if (!this.firstCard || !this.secondCard) {
            return false
        }
        return this.firstCard.icon === this.secondCard.icon;
    },

    clearCards: function () {
        this.firstCard = null;
        this.secondCard = null;
        this.lockMode = false;
    },

    unflipCards() {
        this.firstCard.flipped = false;
        this.secondCard.flipped = false;
        this.clearCards();
    },

    checkGameOver() { 

        return this.cards.filter(card => !card.flipped).length === 0;
    },

    createCardsFromItems: function () {

        this.cards = [];

        this.items.forEach(item => {
            this.cards.push(this.createPairFromItem(item))
        });
        this.cards = this.cards.flatMap(pair => pair);
        this.shuffleCards();
        return this.cards;
    },

    createPairFromItem: function (item) {

        return [{
            id: this.createIdWithItem(item),
            icon: item,
            flipped: false
        }, {
            id: this.createIdWithItem(item),
            icon: item,
            flipped: false
        }]

    },

    createIdWithItem: function (item) {
        return item + parseInt(Math.random() * 1000)
    },

    shuffleCards: function () {
        let currentIndex = this.cards.length;
        let randomIndex = 0;

        while (currentIndex !== 0) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]]
        }
    },

    flipCard: function (cardId, gameOverCallback, noMatchCallback) {
        if (this.setCard(cardId)) {
            if (this.secondCard) {
                if (this.checkMatch()) {
                    this.clearCards();
                    if (this.checkGameOver()) {
                    setTimeout(() => gameOverCallback(), 100)
                        
                    }
                } else {
                    setTimeout(() => {
                        this.unflipCards();
                        noMatchCallback()
                    }, 1000);

                }
            }
        }
    }

}

export default logic