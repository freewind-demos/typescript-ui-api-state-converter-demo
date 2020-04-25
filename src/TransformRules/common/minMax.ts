import {minMaxToString, stringToMinMax} from '../../converters/minMax';
import {getProperty, KeyPath, setProperties, setProperty} from '../../KeyPath';
import {TransformRule} from '../../TransformRule';

export default function minMax<UiState, ApiState>(
  {
    uiKey,
    apiKeys,
  }: {
    uiKey: KeyPath<UiState, string | undefined>;
    apiKeys: {
      min: KeyPath<ApiState, number | undefined>,
      max: KeyPath<ApiState, number | undefined>
    };
  }
): TransformRule<UiState, ApiState> {
  return {
    uiToApi: (uiState: UiState, apiState: ApiState): ApiState => {
      const uiValue = getProperty(uiState, uiKey);
      const [min, max] = stringToMinMax(uiValue);
      return setProperties(apiState, [{
        keyPath: apiKeys.min,
        value: min,
      }, {
        keyPath: apiKeys.max,
        value: max,
      }])
    },
    apiToUi: (apiState: ApiState, uiState: UiState): UiState => {
      const apiMin = getProperty(apiState, apiKeys.min);
      const apiMax = getProperty(apiState, apiKeys.max);
      const uiValue = minMaxToString(apiMin, apiMax);
      return setProperty(uiState, uiKey, uiValue);
    }
  }
};
