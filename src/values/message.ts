export default class Message {
  constructor (private _value:string) {
    this._value = _value.trim();
  }

  get value (): string {
    return this._value;
  }
}
