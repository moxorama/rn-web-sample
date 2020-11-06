import React, { useState, useEffect } from 'react'
import { Linking, Platform } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import { NavigationContainer } from '@react-navigation/native';
import { NotifierWrapper, Notifier, Easing } from 'react-native-notifier';

import { ApplicationProvider,  IconRegistry, } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { mapping, light as lightTheme } from '@eva-design/eva';

import MainNavigation from '~/navigation/MainNavigation';

const NavigationKey = "NAVIGATION_STATE";

export default function RootContainer() {
  const [isNavigationReady, setIsNavigationReady] = useState(false);
  const [initialNavigationState, setInitialNavigationState] = useState();

  useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (Platform.OS !== "web" && initialUrl == null) {
          // Only restore state if there's no deep link and we're not on web
          const savedStateString = await AsyncStorage.getItem(NavigationKey);
          const state = savedStateString
            ? JSON.parse(savedStateString)
            : undefined;

          if (state !== undefined) {
            setInitialNavigationState(state);
          }
        }
      } finally {
        setIsNavigationReady(true);
      }
    };

    if (!isNavigationReady) {
      restoreState();
    }
  }, [isNavigationReady]);

  return (
    <NotifierWrapper>
      <IconRegistry icons={EvaIconsPack} />

      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <NavigationContainer
          initialState={initialNavigationState}
          onStateChange={(state) =>
            AsyncStorage.setItem(NavigationKey, JSON.stringify(state))
          }
        >
          <MainNavigation />
        </NavigationContainer>
      </ApplicationProvider>
    </NotifierWrapper>
  );
}
