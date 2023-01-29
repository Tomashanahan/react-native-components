import React, {useState} from 'react';
import {useContext} from 'react';

import {Animated} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';

import {ThemeContext} from '../context/Theme/Theme.context';
import useAnimation from '../hooks/useAnimation';

import {
  Dimensions,
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

const {width} = Dimensions.get('window');

function Sides() {
  const {theme} = useContext(ThemeContext);

  const [activeIndex, setActiveIndex] = useState(0);
  const navigation = useNavigation();
  const {opacity, fadeIn, fadeOut} = useAnimation();

  const renderItem = (item: Slide) => {
    return (
      <View style={style.renderItemContainer}>
        <Image source={item.img} style={style.img} />
        <Text style={{...style.title, color: theme.colors.primary}}>{item.title}</Text>
        <Text style={{...style.subTitle, color: theme.colors.text}}>{item.desc}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={style.safeAreaContainer}>
      <Carousel
        data={items}
        renderItem={({item}) => renderItem(item)}
        sliderWidth={width}
        itemWidth={width}
        layout="default"
        onSnapToItem={index => {
          setActiveIndex(index);
          if (index === items.length - 1) {
            console.log('index:', index);
            fadeIn();
          } else if (activeIndex < items.length - 1) {
            fadeOut();
          }
        }}
      />
      <View style={style.paginationContainer}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={{...style.paginationDotStyle, backgroundColor: theme.colors.primary}}
        />
        {activeIndex === items.length - 1 && (
          <Animated.View style={{...style.animatedView, opacity, backgroundColor: theme.colors.primary}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home' as never)}
              style={style.touchableOpacity}
              activeOpacity={0.5}>
              <Text style={{...style.touchableOpacityText, color: theme.colors.text}}>Entrar</Text>
              <Icon name="chevron-forward-outline" size={20} color={theme.colors.text} />
            </TouchableOpacity>
          </Animated.View>
        )}
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  touchableOpacityText: {color: '#FFFF', fontWeight: 'bold'},
  paginationContainer: {justifyContent: 'center'},
  touchableOpacity: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedView: {
    borderRadius: 10,
    width: 80,
    height: 50,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: 5,
  },
  safeAreaContainer: {flex: 1},
  img: {width: 350, height: 400, resizeMode: 'center'},
  renderItemContainer: {
    flex: 1,
    borderRadius: 5,
    padding: 40,
    justifyContent: 'center',
  },
  title: {fontSize: 20, color: '#5856D6', fontWeight: 'bold', marginBottom: 12},
  subTitle: {fontSize: 16},
  paginationDotStyle: {width: 10, height: 10, backgroundColor: '#5856D6'},
});

export default Sides;
