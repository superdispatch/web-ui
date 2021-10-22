export type ColorVariant =
  | 'grey'
  | 'silver'
  | 'blue'
  | 'green'
  | 'purple'
  | 'red'
  | 'teal'
  | 'yellow';

export enum Color {
  //
  // ???
  //

  White = '#fff',
  White50 = 'rgba(255, 255, 255, 0.5)',
  White40 = 'rgba(255, 255, 255, 0.4)',
  White20 = 'rgba(255, 255, 255, 0.2)',
  White10 = 'rgba(255, 255, 255, 0.1)',
  White08 = 'rgba(255, 255, 255, 0.08)',
  Transparent = 'rgba(0, 0, 0, 0)',

  Black = '#000',
  Black50 = 'rgba(0, 0, 0, 0.5)',
  Black20 = 'rgba(0, 0, 0, 0.2)',

  //
  // Neutral Colors
  //

  /**@deprecated Use Dark100 */
  Grey100 = '#8F949E',
  /**@deprecated Use Dark200 */
  Grey200 = '#6A707C',
  /**@deprecated Use Dark300 */
  Grey300 = '#5B6371',
  /**@deprecated Use Dark400 */
  Grey400 = '#323C4E',
  /**@deprecated Use Dark450 */
  Grey450 = '#222F44',
  /**@deprecated Use Dark500 */
  Grey500 = '#192334',

  Dark100 = '#8F949E',
  Dark200 = '#6A707C',
  Dark300 = '#5B6371',
  Dark400 = '#323C4E',
  Dark450 = '#222F44',
  Dark500 = '#192334',

  Silver100 = '#F6F7F8',
  Silver200 = '#F3F5F8',
  Silver300 = '#E8ECF0',
  Silver400 = '#E1E5EA',
  Silver500 = '#C4CDD5',

  //
  // Extended Palette
  //

  Blue50 = '#EBF4FF',
  Blue75 = '#CCE5FF',
  Blue100 = '#A8D1FF',
  Blue200 = '#66ADFF',
  Blue300 = '#0075FF',
  Blue400 = '#0063DB',
  Blue500 = '#0050B2',

  Green50 = '#ECF9EF',
  Green75 = '#C8F4D1',
  Green100 = '#90EAAE',
  Green200 = '#5DDA87',
  Green300 = '#1FA84D',
  Green400 = '#1E8F46',
  Green500 = '#19803D',

  Purple50 = '#EFEEFC',
  Purple75 = '#DCDBF5',
  Purple100 = '#CBC8EE',
  Purple200 = '#A7A1E8',
  Purple300 = '#6559CF',
  Purple400 = '#473ABB',
  Purple500 = '#3A2F9D',

  Red50 = '#FFEDEB',
  Red75 = '#FDD9D3',
  Red100 = '#FDC2BA',
  Red200 = '#FE988B',
  Red300 = '#EE3017',
  Red400 = '#D9210D',
  Red500 = '#C31909',

  Teal50 = '#E3F6FC',
  Teal75 = '#BEEDF9',
  Teal100 = '#91E3F8',
  Teal200 = '#61D3EF',
  Teal300 = '#00A0CC',
  Teal400 = '#008DB8',
  Teal500 = '#007DA3',

  Yellow50 = '#FFF9E5',
  Yellow75 = '#FFF1C2',
  Yellow100 = '#FFE494',
  Yellow200 = '#FFDC6B',
  Yellow300 = '#FFCB47',
  Yellow400 = '#FFA91F',
  Yellow500 = '#DB7500',
}

export type ColorProp = keyof typeof Color;

export function isColorProp(name: unknown): name is ColorProp {
  return (
    typeof name == 'string' && Object.prototype.hasOwnProperty.call(Color, name)
  );
}
