import { QName } from '../QName';
export declare class MissingReferenceError extends Error {
    constructor(type: string, ref: QName);
}
