class Deck {
    constructor() {
        this.deck = [];
        this.reset();
        this.hand1 = [];
        this.hand2 = [];
        this.hand3 = [];
        this.hand4 = [];
    }

    reset() {
        this.deck = [];

        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

        for (let suit in suits) {
            for (let value in values) {
                this.deck.push(`${values[value]} of ${suits[suit]}`);
            }
        }
    }

    shuffle() {
        const deck = this.deck;
        let m = deck.length;
        let i;

        while (m) {
            i = Math.floor(Math.random() * m--);

            [deck[m], deck[i]] = [deck[i], deck[m]];
        }

        return this
    }

    deal(shuffled_cards){
        for(let i = 0; i < 7; i++) {
            let dealt_hand1 = this.deck.shift(shuffled_cards);
            this.hand1.push(dealt_hand1);
            let dealt_hand2 = this.deck.shift(shuffled_cards);
            this.hand2.push(dealt_hand2);
            let dealt_hand3 = this.deck.shift(shuffled_cards);
            this.hand3.push(dealt_hand3);
            let dealt_hand4 = this.deck.shift(shuffled_cards);
            this.hand4.push(dealt_hand4);
        }

    }
}


const deck1 = new Deck();

const joinCards = deck1.deck.join(', ');
console.log(deck1.deck);
document.getElementById("deck").innerHTML = joinCards;

deck1.shuffle();
const joinShuffledCards = deck1.deck.join(', ');
console.log(deck1.deck);
document.getElementById("shuffle").innerHTML = joinShuffledCards;

deck1.deal(deck1.deck);
const joinHands1 = deck1.hand1.join(', ');
const joinHands2 = deck1.hand2.join(', ');
const joinHands3 = deck1.hand3.join(', ');
const joinHands4 = deck1.hand4.join(', ');
console.log(deck1.deck);
console.log(deck1.hand1);
console.log(deck1.hand2);
console.log(deck1.hand3);
console.log(deck1.hand4);
document.getElementById("handOne").innerHTML = joinHands1;
document.getElementById("handTwo").innerHTML = joinHands2;
document.getElementById("handThree").innerHTML = joinHands3;
document.getElementById("handFour").innerHTML = joinHands4;

deck1.reset();
console.log(deck1.deck);