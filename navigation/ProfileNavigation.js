import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from '~/screens/profile/ProfileScreen';
import TransactionsScreen from '~/screens/profile/TransactionsScreen';


const Stack = createStackNavigator();

export default function ProfileStack({ navigation, route }) {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      headerMode="none"
    >
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
      />
      <Stack.Screen
        name="TransactionsScreen"
        component={TransactionsScreen}
      />
    </Stack.Navigator>
  );
}
