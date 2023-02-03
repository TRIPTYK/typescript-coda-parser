import type Line from '../lines/line.js';

export default interface LineParser{
    canAcceptString(codaLine:string):boolean,
    parse(codaLine:string):Line,
}
