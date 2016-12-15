namespace SingletonPattern {
  export class Singleton {
    private static instance: Singleton;

    static get Instance() {
      if (this.instance === null || this.instance === undefined) {
        this.instance = new Singleton();
      }
      return this.instance;
    }
  }
}
