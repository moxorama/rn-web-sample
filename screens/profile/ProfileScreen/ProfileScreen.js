import React, { useEffect } from 'react'
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Icon, Layout, Divider, Text, ListItem,
} from '@ui-kitten/components';

import { Header } from '~/components/Layout'

import styles from './ProfileScreenStyle'


export default function ProfileScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    console.log('Portfolio mount')
  },[])


  const handlePressLogout = () => {

  };

  const handlePressTransactions = () => {
    navigation.navigate('TransactionsScreen')
  }

  const renderIcon = () => {
    return (
      <Icon
        width={16}
        height={16}
        name="arrow-ios-forward-outline"
      />
    );
  }


  return (
    <Layout level="4" style={styles.mainContainer}>
      <Header
        title="Profile"
      />
      <ScrollView>
        <Text category="h3" style={styles.pageHeader}>
          Test User
        </Text>
        <Divider />
        <ListItem
          style={styles.listItem}
          title="Transactions"
          accessoryRight={renderIcon}
          onPress={() => navigation.navigate('TransactionsScreen')}
        />
        <Divider />
        <ListItem
          style={styles.listItem}
          title="Logout"
          onPress={handlePressLogout}
        />
      </ScrollView>
    </Layout>
  );
}