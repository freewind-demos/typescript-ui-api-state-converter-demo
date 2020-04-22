import KeyPath from '../KeyPath';
import {TransformRule} from '../TransformRule';

export default function oneToMany<UiState, ApiState>({uiKey, apiKeys}: { uiKey: KeyPath<UiState>, apiKeys: KeyPath<ApiState>[] }): TransformRule<UiState, ApiState> {
  return {
    uiToApi: () => {
    },
    apiToUi: () => {
    }
  }
};
