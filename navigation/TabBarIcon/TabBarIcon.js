import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon, Text, useTheme } from '@ui-kitten/components';

import _ from 'lodash';

import { Metrics } from '~/themes';


const styles = StyleSheet.create({
  badgeContainer: {
    position: 'absolute',
    top: 0,
    right: -Metrics.baseMargin * 1.5,
    paddingHorizontal: Metrics.baseMargin,
    borderRadius: Metrics.baseMargin * 1.5,
    height: Metrics.baseMargin * 3,
    justifyContent: 'center',
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
  },
});


export default function TabBarIcon({ tintColor, iconName, badge }) {
  const theme = useTheme();

  const renderBadge = () => {
    if (_.isNil(badge)) {
      return null;
    }

    return (
      <View style={[styles.badgeContainer, { backgroundColor: theme['color-danger-500'] }]}>
        <Text category="s1" style={[styles.badge, { color: theme['color-basic-100'] }]}>
          {badge}
        </Text>
      </View>
    );
  };

  return (
    <View>
      <Icon
        name={iconName}
        width={25}
        height={25}
        fill={tintColor}
        style={{ marginTop: Metrics.halfMargin }}
      />
      { renderBadge() }
    </View>
  );
}
