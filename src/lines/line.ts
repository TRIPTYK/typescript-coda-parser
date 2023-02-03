import type { LineType } from './LineType.enum.js';

export default interface Line {
  getLineType ():LineType,
}
