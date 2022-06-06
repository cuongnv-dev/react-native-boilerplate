export interface AuthContextData {
  authData?: AuthData;
  loading?: boolean;
  signIn(data: any): Promise<void>;
  signOut(): void;
  signUp(data: any): Promise<void>;
}

export interface AuthData {
  token?: string;
  email?: string;
  userId?: string;
}

export interface AuthAction {
  type: AuthActionKind;
  payload?: AuthData;
}

export enum AuthActionKind {
  RESTORE_TOKEN = 'RESTORE_TOKEN',
  SIGN_IN = 'SIGN_IN',
  SIGN_OUT = 'SIGN_OUT',
}
