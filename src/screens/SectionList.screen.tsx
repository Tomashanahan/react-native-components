/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {SectionList, StyleSheet, Text} from 'react-native';
import {View} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {AppTheme} from '../theme/App.theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import FlatListSeparator from '../components/FlatListSeparator';
import {ThemeContext} from '../context/Theme/Theme.context';
import {useContext} from 'react';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: 'DC Comics',
    data: [
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
    ],
  },
  {
    casa: 'Marvel Comics',
    data: [
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
    ],
  },
  {
    casa: 'Anime',
    data: ['Kenshin', 'Goku', 'Saitama'],
  },
];

function SectionListComponent() {
  const {top} = useSafeAreaInsets();
  const {theme} = useContext(ThemeContext);

  return (
    <View style={{...style.sectionListContainer, marginTop: top}}>
      <SectionList
        sections={casas}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={() => <HeaderTitle title="Section List Component" />}
        ListFooterComponent={() => <View style={style.flatListSeparator} />}
        renderItem={({item}) => (
          <View style={{...style.item, backgroundColor: theme.colors.primary}}>
            <Text style={style.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section: {casa}}) => (
          <Text style={{...style.header, backgroundColor: theme.colors.background, color: theme.colors.text}}>
            {casa}
          </Text>
        )}
        renderSectionFooter={({section: {data}}) => (
          <Text style={{...style.footerTitle, color: theme.colors.text}}>Total de elementos: {data.length}</Text>
        )}
        SectionSeparatorComponent={() => <FlatListSeparator />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const style = StyleSheet.create({
  flatListSeparator: {marginBottom: 100},
  sectionListContainer: {
    ...AppTheme.globalMargin,
    flex: 1,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    borderRadius: 10,
  },
  header: {
    fontSize: 20,
    backgroundColor: '#FFF',
    fontWeight: 'bold',
    paddingVertical: 10,
    color: '#000',
  },
  title: {
    fontSize: 15,
    color: '#FFFF',
  },
  footerTitle: {
    fontSize: 15,
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default SectionListComponent;
