import {ApiState} from './ApiState';
import {UiState} from './UiState';

export type TransformRule<UiState, ApiState> = {
  uiToApi: (uiState: UiState) => ApiState,
  apiToUi: (apiState: ApiState) => UiState
}
