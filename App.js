import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, Text, View, Image, Pressable } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './Home';
import SubTitles from './SubTitles';
import { SafeAreaView } from 'react-navigation';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator intialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SubTitles" component={SubTitles} />
          {/* <Route exact path="/" component={Home}/>
          <Route exact path="subTitles" component={SubTitles}/> */}
        </Stack.Navigator>
      </NavigationContainer>
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


export default App;