
export type OneToOne<FromState, ToState> = (
  fromKey: string[], toKey: string[]
) => Transformer<FromState, ToState>

export type OneToMany<FromState, ToState> = (
  fromKey: string[], toKeys: string[][]
) => Transformer<FromState, ToState>

export type Transformer<FromState, ToState> = (from: FromState, to: ToState) => void

export type GetTransformers<FromState, ToState> = () => {
  [key: string]: (...parameters: any[]) => Transformer<FromState, ToState> 
}
