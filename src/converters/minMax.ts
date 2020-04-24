// TODO: handle only format: A-B
export function stringToMinMax(str: string): [number | undefined, number | undefined] {
  const [min, max] = str.split('-').map(parseInt)
  return [min, max];
}

export function minMaxToString(min: number | undefined, max: number | undefined): string {
  return `${min}-${max}`;
}
