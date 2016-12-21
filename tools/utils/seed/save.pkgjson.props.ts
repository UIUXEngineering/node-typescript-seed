
class PropsCache {

  _props: any;

  get props() {
    return this._props;
  }

  set props(_newProps: any) {
    this._props = _newProps;
  }
}

let singleton: any;

export function getPropsCache() {

  if (!singleton) {
    singleton = new PropsCache();
  }

  return singleton;
}
