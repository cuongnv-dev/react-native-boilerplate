import { AuthAction, AuthActionKind, AuthData } from '@model/auth-context';

export default function authReducer(
  state: AuthData,
  action: AuthAction,
): AuthData {
  const { type, payload } = action;
  switch (type) {
    case AuthActionKind.RESTORE_TOKEN:
      return {
        ...state,
        token: payload?.token,
      };
    case AuthActionKind.SIGN_IN:
      return {
        ...state,
        token: payload?.token,
      };
    case AuthActionKind.SIGN_OUT:
      return {
        ...state,
        token: undefined,
      };
    default:
      return {};
  }
}
