export default class KeyPath<T> {

  private nestedKeys: string[] = [];

  of<P1 extends keyof NonNullable<T>>(prop1: P1): this;

  of<P1 extends keyof NonNullable<T>,
    P2 extends keyof NonNullable<NonNullable<T>[P1]>>(
    prop1: P1, prop2: P2
  ): this;

  of<P1 extends keyof NonNullable<T>,
    P2 extends keyof NonNullable<NonNullable<T>[P1]>,
    P3 extends keyof NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>>(
    prop1: P1, prop2: P2, prop3: P3
  ): this;

  of(...nestedKeys: string[]): this {
    this.nestedKeys = nestedKeys;
    return this;
  }

}
