import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, Text, View, Image, Pressable, Button } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

import { BarCodeScanner } from 'expo-barcode-scanner';



const Home = ({navigation}) => {

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    const [host, port] = data.split(',');
    navigation.push('SubTitles', {port: port, host: host});
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
    
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require("./assets/logo-color.png")}/>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={StyleSheet.camera}
            />
            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
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
  },
  camera: {
    top: 120,
    left: 50,
    width: 140,
    height: 140,
  }
});

export default Home;