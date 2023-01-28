import React from 'react';
import {FlatList, View} from 'react-native';

import FlatListMenuItem from '../components/FlatListMenuItem';

import {AppTheme} from '../theme/App.theme';
import {MenuItem} from '../interfaces/MenuItem.interface';
import FlatListHeader from '../components/FlatListHeader';
import FlatListSeparator from '../components/FlatListSeparator';
import {StyleSheet} from 'react-native';

const menuListData: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102',
  },
];

function Home() {
  return (
    <View style={style.flatListContainer}>
      <FlatList
        data={menuListData}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.icon.toString()}
        ListHeaderComponent={FlatListHeader}
        ItemSeparatorComponent={FlatListSeparator}
      />
    </View>
  );
}

const style = StyleSheet.create({
  flatListContainer: {flex: 1, ...AppTheme.globalMargin},
});

export default Home;
