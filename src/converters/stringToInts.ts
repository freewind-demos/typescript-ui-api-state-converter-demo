export default function stringToInts(s: string): number[] {
  return s.split(',').map(it => parseInt(it));
}
