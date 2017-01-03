import { Observable } from '@reactivex/rxjs';
/***
 * Excerpted from "Reactive Programming with RxJS",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/smreactjs for more book information.
***/
var allMoves = Observable.fromEvent(document, 'mousemove');
allMoves.subscribe(function(e: any) {
  console.log(e.clientX, e.clientY);
});

var movesOnTheRight = allMoves.filter(function(e: any) {
  return e.clientX > window.innerWidth / 2;
});

var movesOnTheLeft = allMoves.filter(function(e: any) {
  return e.clientX < window.innerWidth / 2;
});

movesOnTheRight.subscribe(function(e) {
  console.log('Mouse is on the right:', e.clientX);
});

movesOnTheLeft.subscribe(function(e) {
  console.log('Mouse is on the left:', e.clientX);
});

