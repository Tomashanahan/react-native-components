/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {FlatList, View} from 'react-native';
import {StyleSheet} from 'react-native';

import FlatListMenuItem from '../components/FlatListMenuItem';

import {AppTheme} from '../theme/App.theme';
import {menuListData} from '../data/menuItems.data';
import FlatListSeparator from '../components/FlatListSeparator';
import HeaderTitle from '../components/HeaderTitle';

function Home() {
  return (
    <View style={style.flatListContainer}>
      <FlatList
        data={menuListData}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.icon.toString()}
        ListHeaderComponent={() => <HeaderTitle title="Opciones de Menu" />}
        ItemSeparatorComponent={FlatListSeparator}
      />
    </View>
  );
}

const style = StyleSheet.create({
  flatListContainer: {flex: 1, ...AppTheme.globalMargin},
});

export default Home;
