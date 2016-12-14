import { FOO } from './dep/foo';

/**
 * Sample Demo Class
 */
export class Demo {
  _name: string;
  _dep: FOO;

  constructor(Dep:any) {
    this._name = 'NAME';
    this._dep = new Dep();
  }

  /**
   * Name Setter
   * @param _val
   */
  set name(_val: string) {
    this._name = _val;
  }

  /**
   * Name Getter
   * @returns {string}
   */
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
