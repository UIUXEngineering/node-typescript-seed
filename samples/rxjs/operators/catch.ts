import { Observable } from '@reactivex/rxjs';

function parseJSON(arr): Observable<any> {
  if (!arr) {
    return Observable.throw(new Error('A parameter was expected.'));
  }

  return Observable.from(arr).map(function(str: string) {
    let parsedJSON = JSON.parse(str);
    return parsedJSON;
  });

}

export function passError(): Observable<any> {
  return parseJSON(['{"1": 1, "2": 2}', '{"1: 1}']);
}

export function catchOperator(): Observable<any> {
  return parseJSON(['{"1": 1, "2": 2}', '{"1: 1}'])
    .catch((err: any) => {
      return Observable.from([{
        error: 'There was an error parsing JSON'
      }]);
    });
}
