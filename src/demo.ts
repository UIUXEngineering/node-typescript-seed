export class Demo {
  _name: string;

  constructor() {
    this._name = 'FOO';
  }

  set name(_val: string) {
    this._name = _val;
  }

  get name():string {
    return this._name;
  }
}
