import React from 'react';

import { HomeScreen } from '@features/authentication';
import { AuthorizeName } from '@navigation/screen-names';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const MainStackNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen name={AuthorizeName.HOME} component={HomeScreen} />
  </Stack.Navigator>
);
