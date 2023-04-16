import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, Text, View, Image, Pressable } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

export default function App() {
  const [showDropDown, showIt] = useState(false);
  const [value, setValue] = useState(null);

  var data = [
    { label: 'Theater 1 - Napoleon Dynamite', value: '1' },
    { label: 'Theater 2 - Jaws', value: '2' },
    { label: 'Theater 3 - Scooby Doo', value: '3' }
  ]

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("./assets/logo-color.png")}/>
      {!showDropDown ? (
        <Pressable style={styles.buttons} onPress={() => showIt(!showDropDown)}>
          <Text style={styles.buttonText}>Get Started!</Text>
        </Pressable>
      ) : null}
      {showDropDown ? (
        <Dropdown 
          style={styles.dropDown}
          containerStyle={styles.dropDownContainer}
          data={data} 
          search
          searchPlaceholder='Search'
          placeholder="Select a theater and movie"
          labelField="label"
          valueField="value"
          onChange={item => {
            setValue(item.value);
          }}
        
        />
      ) : null}
      {showDropDown ? (
        <Pressable style={styles.buttons} onPress={() => showIt(!showDropDown)}>
          <Text style={styles.buttonText}>See Subtitles</Text>
        </Pressable>
      ) : null}
      <StatusBar style="auto" />
      {/*
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
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    marginTop: -50,
    marginBottom: 50,
    width: 450,
    height: 150

  },
  buttons: {
    backgroundColor: '#BA3B0A',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  dropDown: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    width: 300,
    margin: 10,
    borderColor: '#BA3B0A',
    borderWidth: 2,
    borderRadius: 8,
  },
  dropDownContainer: {
    width: 300,
  }
});
