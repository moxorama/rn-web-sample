import React, { useState } from 'react'
import { Dimensions } from 'react-native';
import { Layout, ListItem, Text, List } from '@ui-kitten/components';

import { Header } from '~/components/Layout'
import styles from './TransactionsScreenStyle'


export default function TransactionsScreen() {
  const [fetching, setFetching] = useState(false)

  const payments = [
    {
      created_at: '2020-10-05',
      cost: '1000',
    },
    {
      created_at: '2020-10-05',
      cost: '1000',
    },
    {
      created_at: '2020-10-05',
      cost: '1000',
    },
  ]

  const refresh = () => {
    setFetching(true)
    setTimeout(() => {
      setFetching(false)
    }, 1000)
  }

  const renderPayment = ({ item }) => (
    <ListItem
      style={styles.listItem}
      title={`${item.created_at}, ${item.cost}`}
      description={'Income'}
    />
  );

  return (
    <Layout level="4" style={styles.mainContainer}>
      <Header title="Transactions" backLink />
      <List
        style={{ height: Dimensions.get('window').height - 80, paddingTop: 56 }}
        data={payments}
        renderItem={renderPayment}
        keyExtractor={(item, index) => `card_${index}`}
        refreshing={fetching}
        onRefresh={refresh}
      />
    </Layout>
  )
}

