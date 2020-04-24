import {identity} from '../../converters/identify';
import {KeyPath} from '../../KeyPath';
import {TransformRule} from '../../TransformRule';
import oneToOne from '../oneToOne';

export default function copyValue<UiState, ApiState, T>(
  {
    uiKey,
    apiKey,
  }: {
    uiKey: KeyPath<UiState, T>;
    apiKey: KeyPath<ApiState, T>;
  }
): TransformRule<UiState, ApiState> {
  return oneToOne({
    uiKey: uiKey,
    apiKey: apiKey,
    uiToApi: identity,
    apiToUi: identity
  });
}
