import React, {useContext, useState} from 'react';

import {Button, Modal, View, Alert, Text, Pressable} from 'react-native';
import {StyleSheet} from 'react-native';

import {ThemeContext} from '../context/Theme/Theme.context';

import {AppTheme} from '../theme/App.theme';
import HeaderTitle from '../components/HeaderTitle';

function ModalComponent() {
  const [modalVisible, setModalVisible] = useState(false);
  const {theme} = useContext(ThemeContext);

  return (
    <View style={AppTheme.globalMargin}>
      <HeaderTitle title="Modal" />
      <Button title="Abrir modal" onPress={() => setModalVisible(true)} color={theme.colors.primary} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, {...styles.buttonClose, backgroundColor: theme.colors.primary}]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '90%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {},
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ModalComponent;
