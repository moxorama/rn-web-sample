import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DashboardScreen from '~/screens/dashboard/DashboardScreen';
import PortfolioScreen from '~/screens/dashboard/PortfolioScreen';

const Stack = createStackNavigator();

export default function DashboardNavigation({ navigation, route }) {
  return (
    <Stack.Navigator
      initialRouteName="VisitListScreen"
      headerMode="none"
    >
      <Stack.Screen
        name="DashboardScreen"
        component={DashboardScreen}
      />
      <Stack.Screen
        name="PortfolioScreen"
        component={PortfolioScreen}
      />
    </Stack.Navigator>
  );
}
