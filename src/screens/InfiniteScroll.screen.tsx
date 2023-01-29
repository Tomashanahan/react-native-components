/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';

import {ActivityIndicator, StyleSheet} from 'react-native';
import {FlatList, View} from 'react-native';
import {FadeInImage} from '../components/FadeInImage';

import HeaderTitle from '../components/HeaderTitle';

function InfiniteScrollComponent() {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArr: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArr[i] = numbers.length + i;
    }

    setNumbers([...numbers, ...newArr]);
  };

  return (
    <View>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        ListHeaderComponent={() => <HeaderTitle title="InfiniteScroll" />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        renderItem={value => (
          <FadeInImage
            uri={`https://picsum.photos/id/${value.index}/1024/1024`}
            style={style.img}
          />
        )}
        ListFooterComponent={() => (
          <View style={style.activityIndicator}>
            <ActivityIndicator size={40} />
          </View>
        )}
        // showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const style = StyleSheet.create({
  activityIndicator: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {width: '100%', height: 400},
  textItem: {height: 150},
});

export default InfiniteScrollComponent;
