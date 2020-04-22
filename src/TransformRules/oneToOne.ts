import KeyPath from '../KeyPath';
import {TransformRule} from '../TransformRule';

export default function oneToOne<UiState, ApiState>(
  {
    uiKey,
    apiKey,
  }: {
    uiKey: KeyPath<UiState>;
    apiKey: KeyPath<ApiState>;
  },
): TransformRule<UiState, ApiState> {
  return {
    uiToApi: () => {
    },
    apiToUi: () => {
    }
  }
};
