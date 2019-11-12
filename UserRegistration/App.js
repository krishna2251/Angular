

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar} from 'react-native';
import SignUp from './pages/SignUp';
import Login from './pages/Login';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
         <StatusBar backgroundColor="grey"
        barStyle="light-content" />
        <Login />
        <SignUp />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#455a64',
    flex:1,
    alignItems:'center',
    justifyContent :'center'
  },
});
