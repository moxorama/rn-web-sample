import React, { useRef, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { useHover } from 'react-native-web-hooks';

export default function DashboardScreen() {
  const ref = useRef(null);
  const isHovered = useHover(ref);

  useEffect(() => {

  })

  useEffect(() => {
    console.log('Dashboard mount')
  },[])

  return (
    <View style={styles.box}>
      <Text style={[styles.text, isHovered && { color: '#ff0000' }]} ref={ref}>
        Hello from web
      </Text>
      <Text style={[styles.text, isHovered && { color: '#ff0000' }]}>
        Hello from web 2
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: { padding: 10, flexDirection: 'row', justifyContent: 'space-between' },
  text: { fontWeight: 'bold', padding: 10 }
});