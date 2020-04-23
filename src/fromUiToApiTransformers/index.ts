import {OneToOne, OneToMany, GetTransformers} from './../TransformRules';
import {ApiState} from './../ApiState';
import {UiState} from './../UiState';
import {set, get} from 'lodash';


export const key: OneToOne<UiState, ApiState> = (fromKey, toKey) => ((fromState, toState) => {
  set<typeof toState>(toState, toKey, get(fromState, fromKey))
});

export const oneCopyToTwo: OneToMany<UiState, ApiState> = (fromKey, toKeys) => ((fromState, toState) => {
  set<typeof toState>(toState, toKeys[0], get(fromState, fromKey))
  set<typeof toState>(toState, toKeys[1], get(fromState, fromKey))
});

export const getTransformers: GetTransformers<UiState, ApiState> = () => ({
  key,
  oneCopyToTwo,
});
