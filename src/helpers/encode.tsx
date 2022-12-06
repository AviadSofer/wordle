import { encode, decode } from 'js-base64';

export const encodeString = (string: string) => encode(string);

export const decodeString = (string: string) => decode(string);
