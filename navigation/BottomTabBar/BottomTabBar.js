import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { BottomNavigation, BottomNavigationTab, useTheme } from '@ui-kitten/components';

import _ from 'lodash';

import TabBarIcon from '~/navigation/TabBarIcon';

const BottomTabBar = (props) => {
  const { state, user } = props; 

  const theme = useTheme();

  const onSelect = (index) => {
    const selectedTabRoute = props.state.routeNames[index];
    props.navigation.navigate(selectedTabRoute);
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <BottomNavigation
        selectedIndex={state?.index}
        onSelect={onSelect}
        style={{ borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: theme['border-basic-color-4'], paddingVertical: 0 }}
      >
        <BottomNavigationTab
          title="Dashboard"
          icon={(props) => (<TabBarIcon {...props} iconName="file-text-outline" />)}
        />
        <BottomNavigationTab
          title="Profile"
          icon={(props) => (<TabBarIcon {...props} iconName="person" />)}
        />
      </BottomNavigation>
    </SafeAreaView>
  );
};


export default BottomTabBar