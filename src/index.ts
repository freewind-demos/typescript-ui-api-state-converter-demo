import {ApiState} from './ApiState';
import bostonListingEvents from './bostonRules/bostonListingEvents';
import numbersToString from './converters/numbersToString';
import stringToInts from './converters/stringToInts';
import fromUiToApi from './fromUiToApi';
import {KeyPathBuilder} from './KeyPath';
import {TransformRule} from './TransformRule';
import copyValue from './TransformRules/common/copyValue';
import minMax from './TransformRules/common/minMax';
import oneToOne from './TransformRules/oneToOne';
import {UiState} from './UiState';

const uiKeys = new KeyPathBuilder<UiState>();
const apiKeys = new KeyPathBuilder<ApiState>();

const rules: TransformRule<UiState, ApiState>[] = [
  copyValue({
    uiKey: uiKeys.of('zipcode'),
    apiKey: apiKeys.of('details1', 'zipcode'),
  }),
  oneToOne({
    uiKey: uiKeys.of('listingNumbers'),
    apiKey: apiKeys.of('details1', 'listingNumbers'),
    uiToApi: stringToInts,
    apiToUi: numbersToString
  }),
  minMax({
    uiKey: uiKeys.of('price'),
    apiKeys: {
      min: apiKeys.of('details1', 'priceMin'),
      max: apiKeys.of('details1', 'priceMax'),
    }
  }),
  bostonListingEvents({
    uiKey: uiKeys.of('listingEvents'),
    apiKeys: {
      minLocalOpenHouseDate: apiKeys.of('minLocalOpenHouseDate'),
      maxLocalOpenHouseDate: apiKeys.of('maxLocalOpenHouseDate'),
      onlyPrivateOpenHouses: apiKeys.of('onlyPrivateOpenHouses'),
      includePrivateOpenHouses: apiKeys.of('includePrivateOpenHouses'),
    }
  }),
  // manyToOne({
  //   uiKeys: [
  //     uiKeys.of('aaa1'),
  //     uiKeys.of('aaa2')
  //   ],
  //   apiKey: apiKeys.of('details2', 'aaa')
  // }),
  // oneToMany({
  //   uiKey: uiKeys.of('bbb'),
  //   apiKeys: [
  //     apiKeys.of('details2', 'bbb1'),
  //     apiKeys.of('details2', 'bbb2')
  //   ]
  // }),
  // manyToMany({
  //   uiKeys: [
  //     uiKeys.of('ccc1'),
  //     uiKeys.of('ccc2')
  //   ],
  //   apiKeys: [
  //     apiKeys.of('details2', 'ccc3'),
  //     apiKeys.of('details2', 'ccc4')
  //   ]
  // })
]

const uiState: UiState = {
  zipcode: '123123',
  listingNumbers: '111,222',
  listingEvents: {
    startDate: '2020-01-01',
    endDate: '2020-01-02',
    listingEvents: []
  },
  price: '22-33',
  aaa1: 'aaaaa',
}

const apiState = fromUiToApi(uiState, rules)
console.log('### apiState', apiState);

