import KeyPath from '../KeyPath';
import {TransformRule} from '../fromUiToApiTransformers/TransformRule';

export default function manyToOne<UiState, ApiState>({uiKeys, apiKey}: { uiKeys: KeyPath<UiState>[], apiKey: KeyPath<ApiState> }): TransformRule<UiState, ApiState> {
  return {
    uiToApi: () => {
    },
    apiToUi: () => {
    }
  }
};
