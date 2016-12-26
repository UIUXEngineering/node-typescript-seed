let suits = ['hearts', 'spades', 'clubs', 'diamonds'];

/**
 * To export overloads, functions must be in a class
 */
export class OverloadDemoClass {
  pickCard(x: {suit: string; card: number; }[]): number;
  pickCard(x: number): {suit: string; card: number; };
  pickCard(x): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x === 'object') {
      let pickedCard = Math.floor(Math.random() * x.length);
      return pickedCard;
    } else if (typeof x === 'number') { // Otherwise just let them pick the card
      let pickedSuit = Math.floor(x / 13);
      return { suit: suits[pickedSuit], card: x % 13 };
    }
  }
}


