import {ApiState} from './ApiState';
import {UiState} from './UiState';

export type TransformRule<UiState, ApiState> = {
  uiToApi: (uiState: UiState, apiState: ApiState) => ApiState,
  apiToUi: (apiState: ApiState, uiState: UiState) => UiState
}
