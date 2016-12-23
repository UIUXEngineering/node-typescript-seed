# RXJS

# Directories

## `./create/observers` - Create Oberserver
### Do
Use Subscribe.create  

```typescript
  import { Subscriber, Observer } from '@reactivex/rxjs';

   let observer: Observer<string> = Subscriber.create(
        function onNext(x: string) {
          console.log(x);
        },
        function onError(err: string) {
          console.log(err);
        },
        function onCompleted() {
          console.log('completed');
        }
    );
```

### Avoid
newing up the Subscriber.
```typescript
  import { Subscriber, Observer } from '@reactivex/rxjs';

   let observer: Observer<string> = new Subscriber(
        function onNext(x: string) {
          console.log(x);
        },
        function onError(err: string) {
          console.log(err);
        },
        function onCompleted() {
          console.log('completed');
        }
    );
```

### Why
`Subscriber.create` is the official API to create observers.


## `./dal` - Data Access Layer
Provide data with Observers, Subjects, Behavioral Subjects
