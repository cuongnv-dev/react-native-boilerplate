import { RootName } from '@navigation/screen-names';

import { AuthorizeStackParamList } from './authorize-navigator.type';
import { UnAuthorizeStackParamList } from './un-authorize-navigator.type';

export type RootStackParamList = {
  [RootName.AUTHORIZE]: undefined;
  [RootName.UN_AUTHORIZE]: undefined;
} & UnAuthorizeStackParamList &
  AuthorizeStackParamList;
