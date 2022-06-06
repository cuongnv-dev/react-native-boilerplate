import React, { useEffect } from 'react';

import { RegisterScreen, SignInScreen } from '@features/un-authentication';
import { UnAuthorizeName } from '@navigation/screen-names';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

const Stack = createStackNavigator();

export const UnAuthenticationStackNavigation = () => {
  // effect
  useEffect(() => {
    // clean cache when logout
  }, []);

  // render
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: true }}>
      <Stack.Screen name={UnAuthorizeName.LOGIN} component={SignInScreen} />
      <Stack.Screen
        name={UnAuthorizeName.REGISTER}
        component={RegisterScreen}
        options={{ ...TransitionPresets.SlideFromRightIOS }}
      />
    </Stack.Navigator>
  );
};
