import {ApiState} from './ApiState';
import fromUiToApi from './fromUiToApi';
import KeyPath, {key} from './KeyPath';
import {TransformRule} from './TransformRule';
import manyToMany from './TransformRules/manyToMany';
import manyToOne from './TransformRules/manyToOne';
import oneToMany from './TransformRules/oneToMany';
import oneToOne from './TransformRules/oneToOne';
import {UiState} from './UiState';

const uiState: UiState = {}

const uiKeys = new KeyPath<UiState>();
const apiKeys = new KeyPath<ApiState>();

const rules: TransformRule<UiState, ApiState>[] = [
  oneToOne({
    uiKey: uiKeys.of('zipcode'),
    apiKey: apiKeys.of('details1', 'zipcode'),
  }),
  oneToOne({
    uiKey: uiKeys.of('listingNumbers'),
    apiKey: apiKeys.of('details1', 'listingNumbers')
  }),
  manyToOne({
    uiKeys: [
      uiKeys.of('aaa1'),
      uiKeys.of('aaa2')
    ],
    apiKey: apiKeys.of('details2', 'aaa')
  }),
  oneToMany({
    uiKey: uiKeys.of('bbb'),
    apiKeys: [
      apiKeys.of('details2', 'bbb1'),
      apiKeys.of('details2', 'bbb2')
    ]
  }),
  manyToMany({
    uiKeys: [
      uiKeys.of('ccc1'),
      uiKeys.of('ccc2')
    ],
    apiKeys: [
      apiKeys.of('details2', 'ccc3'),
      apiKeys.of('details2', 'ccc4')
    ]
  })
]

const apiState = fromUiToApi(uiState, rules)
console.log('### apiState', apiState);

