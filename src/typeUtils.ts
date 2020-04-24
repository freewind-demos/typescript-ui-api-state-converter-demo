export type DeepPartial<T> = { [K in keyof T]?: DeepPartial<T[K]> };

export type DeepNoExcess<T, U> = {
  [K in keyof U]:
  K extends keyof T ? DeepNoExcess<Required<T>[K], U[K]> :
    never
};

// https://stackoverflow.com/questions/61393505/how-to-define-a-type-and-make-sure-its-part-of-another-type-in-typescript
export type PartOf<T, U extends DeepPartial<T> & DeepNoExcess<T, U>> = U;
