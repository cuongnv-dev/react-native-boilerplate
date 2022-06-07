import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';

import { STORAGE_KEY_AUTH_TOKEN } from '@common';
import { AuthActionKind, AuthContextData } from '@model/auth-context';
import { loadString, remove, saveString } from '@utils/storage';

import authReducer from './auth-reducer';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = loadString(STORAGE_KEY_AUTH_TOKEN);
      } catch (e) {
        // Restoring token failed
      }
      setLoading(false);
      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({
        type: AuthActionKind.RESTORE_TOKEN,
        payload: { token: userToken ?? undefined },
      });
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      loading,
      authData: state,
      signIn: async (data: any) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token
        console.log('data', data);
        saveString(STORAGE_KEY_AUTH_TOKEN, 'dummy-auth-token');
        dispatch({
          type: AuthActionKind.SIGN_IN,
          payload: { token: 'dummy-auth-token' },
        });
      },
      signOut: () => {
        remove(STORAGE_KEY_AUTH_TOKEN);
        dispatch({ type: AuthActionKind.SIGN_OUT });
      },
      signUp: async (data: any) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token
        console.log('data :>> ', data);
        saveString(STORAGE_KEY_AUTH_TOKEN, 'dummy-auth-token');
        dispatch({
          type: AuthActionKind.SIGN_IN,
          payload: { token: 'dummy-auth-token' },
        });
      },
    }),
    [loading, state],
  );

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { useAuth, AuthProvider, AuthContext };
