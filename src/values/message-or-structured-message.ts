import { validateStringMultipleLengths } from '../helpers.js';
import Message from './message.js';
import StructuredMessage from './structured-message.js';
import type TransactionCode from './transaction-code.js';

export default class MessageOrStructuredMessage {
  private declare _structuredMessage: StructuredMessage;
  private declare _message: Message;
  constructor (_value:string, transactionCode:TransactionCode) {
    validateStringMultipleLengths(_value, [54, 74], 'MessageOrStructuredMessage');
    const hasStructuredMessage = _value.substring(0, 1) === '1';

    if (hasStructuredMessage) {
      this._structuredMessage = new StructuredMessage(_value.substring(1), transactionCode);
    } else {
      this._message = new Message(_value.substring(1));
    }
  }

  get structuredMessage (): StructuredMessage {
    return this._structuredMessage;
  }

  get message (): Message {
    return this._message;
  }
}
