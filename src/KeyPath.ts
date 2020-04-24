import get from 'lodash/get';
import set from 'lodash/fp/set';

// We have to define a class rather than a function for the 'of' methods,
// because IDE can only auto-complete key names in this case
export class KeyPathBuilder<T> {
  public of<P1 extends keyof NonNullable<T>>(prop1: P1): KeyPath<T, NonNullable<T>[P1]>;
  public of<P1 extends keyof NonNullable<T>,
    P2 extends keyof NonNullable<NonNullable<T>[P1]>>(
    prop1: P1, prop2: P2
  ): KeyPath<T, NonNullable<NonNullable<T>[P1]>[P2]>;

  public of(...nestedKeys: string[]): KeyPath<T, any> {
    return new KeyPath(nestedKeys);
  }
}

export class KeyPath<T, P> {
  get fullKeyPath() {
    return this.nestedKeys.join('.');
  }

  constructor(private nestedKeys: string[]) {
  }
}

export function getProperty<T, P>(obj: T, keyPath: KeyPath<T, P>): P {
  // FIXME just quick and dirty
  return get(obj, keyPath.fullKeyPath);
}

export function setProperty<T, P>(obj: T, keyPath: KeyPath<T, P>, value: P): T {
  // FIXME just quick and dirty
  // 'set' requires 'obj' as type of 'object',
  // we do a force conversion here to simplify the type declarations: no need "extends object"
  return set(keyPath.fullKeyPath, value, obj as any);
}

// FIXME how to declare U which makes keyPath and value have correct typing
export function setProperties<T>(obj: T, keyPathsAndValues: { keyPath: KeyPath<T, any /*U*/>, value: any /*U*/ }[]) {
  return keyPathsAndValues.reduce((a, item) => {
    return setProperty(a, item.keyPath, item.value)
  }, obj)
}
