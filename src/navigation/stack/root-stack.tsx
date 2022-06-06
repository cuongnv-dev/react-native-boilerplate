import React, { useEffect } from 'react';

import BootSplash from 'react-native-bootsplash';

import { RootName } from '@navigation/screen-names';
import { RootStackParamList } from '@navigation/types';
import { createStackNavigator } from '@react-navigation/stack';

import { MainStackNavigation } from './authorized/main-stack';
import { UnAuthenticationStackNavigation } from './un-authorize';

const RootStack = createStackNavigator<RootStackParamList>();

export const RootStackNavigation = () => {
  //TODO: handle authentication flow
  const token = undefined;
  useEffect(() => {
    const id = setTimeout(() => {
      BootSplash.hide({ fade: true });
    }, 1000);
    return () => clearTimeout(id);
  }, []);

  return (
    <RootStack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: true }}>
      {token === undefined ? (
        <RootStack.Screen
          options={{ animationTypeForReplace: 'pop', gestureEnabled: false }}
          name={RootName.UN_AUTHORIZE}
          component={UnAuthenticationStackNavigation}
        />
      ) : (
        <RootStack.Screen
          options={{ animationTypeForReplace: 'pop', gestureEnabled: false }}
          name={RootName.AUTHORIZE}
          component={MainStackNavigation}
        />
      )}
    </RootStack.Navigator>
  );
};
