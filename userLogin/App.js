/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View,StatusBar} from 'react-native';
 import Login from './src/pages/login';
// import Singup from './src/pages/Signup';
//import Router from './src/Routes';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="grey"
        barStyle="light-content" />
        {/* <Text style={{color:'#ffffff', fontSize:18}}>Hi Dmantz</Text> */}
        <Login/>
        {/* <Singup />  */}
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container :{
    backgroundColor:'#455a64',
    flex:1,
    alignItems:'center',
    justifyContent :'center'
  }
});
