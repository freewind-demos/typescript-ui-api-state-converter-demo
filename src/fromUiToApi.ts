import {Transformer} from './TransformRules';
import {ApiState} from './ApiState';
import {UiState} from './UiState';


export default function fromUiToApi(uiState: UiState, apiState: ApiState = {}, transformers: Transformer<UiState, ApiState>[]): ApiState {
  transformers.forEach((transform) => {
    transform(uiState, apiState)
  });
  return apiState;
};
