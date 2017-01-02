import { Observable } from '@reactivex/rxjs';
import { readFile } from 'fs';

var readFileAsObservable: any = Observable.bindNodeCallback(readFile);
var result = readFileAsObservable('./roadNames.txt', 'utf8');
result.subscribe(x => console.log(x), e => console.error(e));
