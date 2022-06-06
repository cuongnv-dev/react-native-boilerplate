import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { RootStackNavigation } from './stack/root-stack';

export const AppContainer = () => {
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor={'transparent'} />
      <RootStackNavigation />
    </NavigationContainer>
  );
};
