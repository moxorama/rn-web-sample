import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { TopNavigation, TopNavigationAction, Icon, useTheme } from '@ui-kitten/components';

import styles from './LayoutStyle';


export default function Header({ title, backLink = false, delimiter = false }) {
  const theme = useTheme();
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const optionalBackLink = () => {
    if (!backLink) {
      return null;
    }

    return (
      <TopNavigationAction
        icon={(style) => <Icon {...style} name="arrow-ios-back-outline" />}
        onPress={goBack}
      />
    );
  };

  return (
    <SafeAreaView style={[
      delimiter && { borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: theme['border-basic-color-4'] },
      styles.headerSafeArea,
    ]}>
      <TopNavigation
        title={title}
        alignment="center"
        accessoryLeft={optionalBackLink}
      />
    </SafeAreaView>
  );
}
