import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BottomTabBar from './BottomTabBar';
import TabBarIcon from './TabBarIcon';

import DashboardNavigation from './DashboardNavigation';
import ProfileNavigation from './ProfileNavigation';

const BottomTabs = createBottomTabNavigator();

export default function MainNavigation({ navigation, route, visits }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  return (
    <BottomTabs.Navigator
      initialRouteName="Request"
      tabBar={(props) => <BottomTabBar {...props} />}
    >
      <BottomTabs.Screen
        name="Dashboard"
        component={DashboardNavigation}
      />
      <BottomTabs.Screen
        name="Profile"
        component={ProfileNavigation}
      />
    </BottomTabs.Navigator>
  );
}

