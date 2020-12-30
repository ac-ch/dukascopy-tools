/* eslint-disable no-console */
import fs from 'fs';
import { promisify } from 'util';
import { MetaDataResponse } from './generate-data.types';
const saveFile = promisify(fs.writeFile);

export function generateInstrumentEnum(
  instruments: MetaDataResponse['instruments'],
  path: string
): Promise<void> {
  const enumKeys = Object.keys(instruments).map(inst => {
    const { name, description, historical_filename } = instruments[inst];

    const cleanName = historical_filename || inst.replace(/\W/g, '');
    const key = /^\d/.test(cleanName) ? `'${cleanName}'` : cleanName;

    const line = `
    /**
     * ### ${description}
     * *${name}*
     */
    ${key}='${cleanName}',`;
    return line;
  });

  const strings = [
    'export enum Instrument {',
    ...enumKeys,
    '}',
    'export type InstrumentType = keyof typeof Instrument;'
  ].join('\n');

  return saveFile(path, strings).then(() => {
    console.log('instruments enum generated!', path);
  });
}
