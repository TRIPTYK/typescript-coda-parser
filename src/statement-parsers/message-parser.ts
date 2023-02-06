import type MessageLine from '../lines/message-line.js';

export default class MessageParser {
  parse (messageLines:MessageLine[]) {
    return messageLines.reduce((message, line) => {
      return `${message}${line.message.value.trim()}`;
    }, '');
  }
}
