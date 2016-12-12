import { FOO } from './dep/foo';

export class Demo {
  _name: string;
  _dep: FOO;

  constructor(Dep:any) {
    this._name = 'NAME';
    this._dep = new Dep();
  }

  set name(_val: string) {
    this._name = _val;
  }

  get name():string {
    return this._name;
  }

  get dep() {
    return this._dep;
  }
}

export function create():any {
  return new Demo(FOO);
}
