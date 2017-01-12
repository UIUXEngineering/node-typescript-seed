import * as connect from 'connect';
import * as serveStatic from 'serve-static';
import * as open from 'open';

export function createServer(directory: string, port: number): void {

  connect().use(serveStatic(directory)).listen(port, function(){
    console.log('Server running on localhost:' + port);
    open('http://localhost:' + port);
  });

}
