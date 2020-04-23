import fromUiToApi from './fromUiToApi';
import {UiKeyPath, ApiKeyPath} from './KeyPath';
import {UiState} from './UiState';
import {getTransformers} from './fromUiToApiTransformers';

const {key, oneCopyToTwo} = getTransformers();
const rules = [
  key(UiKeyPath.check('zipcode'), ApiKeyPath.check('details1', 'zipcode')),
  key(UiKeyPath.check('listingNumbers'), ApiKeyPath.check('details1', 'listingNumbers')),
  oneCopyToTwo(UiKeyPath.check('bbb'), [
    ApiKeyPath.check('details2', 'bbb1'),
    ApiKeyPath.check('details2', 'bbb2')
  ])
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

// export type UiState = {
//   zipcode?: string,
//   listingNumbers?: string,
//   aaa1?: string,
//   aaa2?: string,
//   bbb?: string,
//   ccc1?: string,
//   ccc2?: string,
// }

const uiState: UiState = {
  zipcode: '12345',
  listingNumbers: '67890',
  bbb: 'bbb'
}

const apiState = fromUiToApi(uiState, {}, rules)
console.log('### apiState', apiState);

