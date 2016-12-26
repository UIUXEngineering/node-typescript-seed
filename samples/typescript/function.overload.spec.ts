/// <reference path='../../tools/manual_typings/project/jasmine.d.ts' />

import { OverloadDemoClass } from './function.overload';

describe('TypeScript', () => {
  describe('function overloads with multiple params', () => {

    let demoClass;
    let pickedCard;
    let myDeck: {
      suit: string,
      card: number
    }[]; // Array

    beforeEach(() =>  {
      demoClass = new OverloadDemoClass();
      myDeck = [
        { suit: 'diamonds', card: 2 },
        { suit: 'spades', card: 10 },
        { suit: 'hearts', card: 4 }];

      // Pick the card
      pickedCard = myDeck[demoClass.pickCard(myDeck)];
    });

    afterEach(() => {
      myDeck = null;
    });

    it('should return card', () => {
      expect(pickedCard.suit).toEqual(jasmine.any(String));
      expect(pickedCard.card).toEqual(jasmine.any(Number));
    });
  });

  describe('function overloads with one param', () => {
    let demoClass;
    let pickedCard;
    let myDeck: {
      suit: string,
      card: number
    }[]; // Array

    beforeEach(() =>  {
      demoClass = new OverloadDemoClass();
      myDeck = [
        { suit: 'diamonds', card: 10 },
        { suit: 'spades', card: 2 },
        { suit: 'hearts', card: 4 }
        ];

      // Pick the card
      pickedCard = demoClass.pickCard(15);
    });

    afterEach(() => {
      myDeck = null;
    });

    it('should return card', () => {
      expect(pickedCard.suit).toEqual(jasmine.any(String));
      expect(pickedCard.card).toEqual(jasmine.any(Number));
    });
  });
});

