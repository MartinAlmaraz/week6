/// War Game

class Deck {
    constructor () {
        this.cards = [];
    }
    ///creates deck
    createDeck() {
        let ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'King', 'Queen'];
        let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        let suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];

        for (let i = 0; i < suits.length; i++) {
            for (let a =0; a <ranks.length; a++){
                this.cards.push(new Card (suits[i], ranks[a],values[a]));
            }
        }
    }


    shuffleCards(array) {
        for (let i = array.length -1; i > 0; i--) {
            const a = Math.floor(Math.random() * (i + 1));
            [array[i], array[a]] = [array[a], array[i]];
        }
    }
}

class Card{
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
    /// what type of card is it 
    typeOfCard(){
        console.log(this.rank + ' of ' + this.suit)
    }
}
/// Player class
class Player{
    constructor(name1, name2){
        this.one = name1;
        this.score1 = 0;
        this.hand1 = new Deck;
        
        this.two = name2;
        this.score2 = 0;
        this.hand2 = new Deck;
    }

    /// gives equal cards to each player
    dealCards(array){
        for(let i = 0; i < array.length; i+= 2){
            this.hand1.cards.push(array[i]);
            this.hand2.cards.push(array[(i +1)]);
        }
    }
    
    turns(hand1, hand2){
        for(let i = 0; i < hand1.cards.length; i++ ){
            let compare;

            if(hand1.cards[i].value > hand2.cards[i].value){ // if player one has a greater value than player two
                compare = 1;
            }
            else if(hand1.cards[i].value < hand2.cards[i].value){// player two has greater value than player one
                 compare = 2;
            }
            else if(hand1.cards[i].value == hand2.cards[i].value){// values are the same
                compare = 3;
            }

            console.log(hand1.cards[i].rank + ' of ' + hand1.cards[i].suit + `[${hand1.cards[i].value}]` + ' vs ' 
            + hand2.cards[i].rank + ' of ' + hand2.cards[i].suit + `[${hand2.cards[i].value}]`);
            
            // Will print the opponents cards
            switch(compare){
                case 1:
                    this.score1 =this.score1 +1;
                    console.log(`${this.one}: ${this.score1} vs ${this.two}: ${this.score2}`);
                    break;
                case 2:
                    this.score2 = this.score2 +1;
                    console.log(`${this.one}: ${this.score1} vs ${this.two}: ${this.score2}`);
                    break;
                default:
                    console.log('It is a draw!')
            }
        }
    }
    
    showScore(){
        if( this.score1 > this.score2) {
            console.log(this.one + 'is the winner!');
        } else if (this.score1 < this.score2) {
            console.log(this.two + ' is the winner!') 
        } else if (this.score1 == this.score2) {
            console.log('It is a tie')
        }
    }


}

let deck = new Deck;
deck.createDeck();
deck.shuffleCards(deck.cards);
let player = new Player('Player 1', 'Player 2')
player.dealCards(deck.cards);
player.turns(player.hand1, player.hand2);
player.showScore();