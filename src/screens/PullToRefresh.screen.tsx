import React, {useState} from 'react';
import {Platform, Text} from 'react-native';
import {RefreshControl, ScrollView, View} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {AppTheme} from '../theme/App.theme';

function PullToRefresh() {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState('');

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setData('hola mundo');
      setRefreshing(false);
    }, 1000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={Platform.OS === 'ios' ? 50 : 0}
        />
      }>
      <View style={AppTheme.globalMargin}>
        <HeaderTitle title="PullToRefresh" />
        <Text>{data}</Text>
      </View>
    </ScrollView>
  );
}

export default PullToRefresh;
