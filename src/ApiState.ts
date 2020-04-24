import {AllPossibleApiState} from './AllPossibleApiState';
import {IsPartOf} from './typeUtils';

export type ApiState = {
  details1?: {
    zipcode?: string,
    listingNumbers?: number[],
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
}

const isPartOfChecking : IsPartOf<ApiState, AllPossibleApiState> = true;