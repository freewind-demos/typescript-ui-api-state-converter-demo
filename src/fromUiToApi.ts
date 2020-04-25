import {ApiState} from './ApiState';
import {TransformRule} from './TransformRule';
import {UiState} from './UiState';

export default function fromUiToApi(uiState: UiState, conversionRules: TransformRule<UiState, ApiState>[]): ApiState {
  return conversionRules.reduce((result, rule) => {
    return rule.uiToApi(uiState, result)
  }, {})
};
