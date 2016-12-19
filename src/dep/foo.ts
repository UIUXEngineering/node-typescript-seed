/**
 * Sameple Foo Class
 */
export class FOO {
  _name: string;

  constructor() {
    this._name = 'FOO';
  }

  /**
   * Name setter
   * @param _val
   */
  set name(_val: string) {
    this._name = _val;
  }

  /**
   * Name getter
   * @returns {string}
   */
  get name():string {
    return this._name;
  }
}
