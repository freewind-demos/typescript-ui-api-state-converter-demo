import {ApiState} from './ApiState';
import {UiState} from './UiState';

export type KeyPath<T> = {
  check<P1 extends keyof NonNullable<T>>(prop1: P1): string[];
  check<P1 extends keyof NonNullable<T>,
    P2 extends keyof NonNullable<NonNullable<T>[P1]>>(
    prop1: P1, prop2: P2
  ): string[];

  check<P1 extends keyof NonNullable<T>,
    P2 extends keyof NonNullable<NonNullable<T>[P1]>,
    P3 extends keyof NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>>(
    prop1: P1, prop2: P2, prop3: P3
  ): string[];
}

export const UiKeyPath: KeyPath<UiState> = {
  check: (...keys: string[]) => (keys),
}

export const ApiKeyPath: KeyPath<ApiState> = {
  check: (...keys: string[]) => (keys),
}
