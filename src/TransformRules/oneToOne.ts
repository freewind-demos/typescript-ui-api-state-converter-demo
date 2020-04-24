import {getProperty, KeyPath, setProperty} from '../KeyPath';
import {TransformRule} from '../TransformRule';

export default function oneToOne<UiState, ApiState, UiPropertyType, ApiPropertyType>(
  {
    uiKey,
    apiKey,
    uiToApi,
    apiToUi,
  }: {
    uiKey: KeyPath<UiState, UiPropertyType>;
    apiKey: KeyPath<ApiState, ApiPropertyType>;
    uiToApi: (uiKey: UiPropertyType) => ApiPropertyType;
    apiToUi: (apiKeyValue: ApiPropertyType) => UiPropertyType
  },
): TransformRule<UiState, ApiState> {
  return {
    uiToApi: (uiState, apiState) => {
      const uiValue = getProperty(uiState, uiKey)
      const apiValue = uiToApi(uiValue)
      return setProperty(apiState, apiKey, apiValue);
    },
    apiToUi: (apiState, uiState) => {
      const apiValue = getProperty(apiState, apiKey)
      const uiValue = apiToUi(apiValue)
      return setProperty(uiState, uiKey, uiValue);
    }
  }
};
