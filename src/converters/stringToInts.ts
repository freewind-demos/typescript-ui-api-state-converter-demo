export default function stringToInts(str: string | undefined): number[] | undefined {
  return str?.split(',').map(it => parseInt(it));
}
