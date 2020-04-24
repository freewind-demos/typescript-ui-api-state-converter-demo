import {ApiState} from '../ApiState';
import {getProperty, KeyPath, setProperties, setProperty} from '../KeyPath';
import {TransformRule} from '../TransformRule';
import {UiState} from '../UiState';

export default function bostonListingEvents(
  {
    uiKey,
    apiKeys,
  }: {
    uiKey: KeyPath<UiState, UiState['listingEvents']>;
    apiKeys: {
      minLocalOpenHouseDate: KeyPath<ApiState, string>
      maxLocalOpenHouseDate: KeyPath<ApiState, string>
      onlyPrivateOpenHouses: KeyPath<ApiState, boolean>
      includePrivateOpenHouses: KeyPath<ApiState, boolean>
    };
  }
): TransformRule<UiState, ApiState> {
  return {
    uiToApi: (uiState: UiState, apiState: ApiState): ApiState => {
      const uiListingEvents = getProperty(uiState, uiKey);

      // FIXME calculated api values
      const minLocalOpenHouseDate = '2020-04-04';
      const maxLocalOpenHouseDate = '2020-04-04';
      const onlyPrivateOpenHouses = true;
      const includePrivateOpenHouses = false;

      // FIXME how to make sure typing of value is correct for the keys
      return setProperties(apiState, [
        {keyPath: apiKeys.minLocalOpenHouseDate, value: minLocalOpenHouseDate},
        {keyPath: apiKeys.maxLocalOpenHouseDate, value: maxLocalOpenHouseDate},
        {keyPath: apiKeys.onlyPrivateOpenHouses, value: onlyPrivateOpenHouses},
        {keyPath: apiKeys.includePrivateOpenHouses, value: includePrivateOpenHouses},
      ]);
    },
    apiToUi: (apiState: ApiState, uiState: UiState): UiState => {
      const minLocalOpenHouseDate = getProperty(apiState, apiKeys.minLocalOpenHouseDate);
      const maxLocalOpenHouseDate = getProperty(apiState, apiKeys.maxLocalOpenHouseDate);
      const onlyPrivateOpenHouses = getProperty(apiState, apiKeys.onlyPrivateOpenHouses);
      const includePrivateOpenHouses = getProperty(apiState, apiKeys.includePrivateOpenHouses);

      // FIXME calculate listing events
      const uiListingEvents: UiState['listingEvents'] = {
        startDate: 'some-start-date',
        endDate: 'some-end-date',
        listingEvents: []
      }

      return setProperty(uiState, uiKey, uiListingEvents);
    },
  }
};
