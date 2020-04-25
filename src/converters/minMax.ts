// TODO: handle only format: A-B
export function stringToMinMax(str: string | undefined): [number | undefined, number | undefined] {
  if (str === undefined) {
    return [undefined, undefined]
  }
  const [min, max] = str.split('-').map(it => parseInt(it));
  return [min, max];
}

export function minMaxToString(min: number | undefined, max: number | undefined): string {
  return `${min}-${max}`;
}
