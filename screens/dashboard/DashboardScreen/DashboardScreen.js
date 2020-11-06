import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import ViewPager from '@react-native-community/viewpager';

export default function DashboardScreen() {

  useEffect(() => {
    console.log('Dashboard mount')
  },[])

  // ViewPager не работает в web, потому что это проброс нативного компонента
  return (
    <ViewPager style={styles.viewPager} initialPage={0} showPageIndicator>
      <View key="1">
        <Text>First page</Text>
      </View>
      <View key="2">
        <Text>Second page</Text>
      </View>
    </ViewPager>
  );
}

const styles = StyleSheet.create({
  viewPager: {
    marginTop: 80,
    marginHorizontal: 10,
    flex: 1,
  },
});