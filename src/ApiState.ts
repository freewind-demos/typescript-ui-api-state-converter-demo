import {AllPossibleApiState} from './AllPossibleApiState';
import {PartOf} from './typeUtils';

export type ApiState = PartOf<AllPossibleApiState, {

  minLocalOpenHouseDate?: string,
  maxLocalOpenHouseDate?: string,
  onlyPrivateOpenHouses?: boolean,
  includePrivateOpenHouses?: boolean,

  details1?: {
    zipcode?: string,
    listingNumbers?: number[],
    priceMin?: number,
    priceMax?: number,
  },
  details2?: {
    aaa?: boolean,
    bbb1?: string,
    bbb2?: string,
    ccc3?: string,
    ccc4?: string,
  },
  details3?: {
    d111?: string
    d222?: string
  }
}>
