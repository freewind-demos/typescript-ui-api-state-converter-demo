export type IsPartOf<Partial, All> = 
  [keyof Partial] extends [keyof All] ? All extends Partial ? true : false : false



