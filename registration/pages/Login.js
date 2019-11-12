import React, {Component} from 'react';
import {StyleSheet, TextInput, View,StatusBar,Button} from 'react-native';


export default class App extends Component {

  
  render() {
    return (
      <View style={styles.container}>
              <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="User Name"
                    placeholderTextColor="#ffffff" />
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="#ffffff" />
                    {/* <StatusBar hidden /> */}
                    
                {/* <StatusBar backgroundColor="#1565c0"
                   barStyle="light-content" /> */}
        {/* <Text> Welcome to Dmantz Login</Text>         */}
        <Button title="Go To Signup Screen" onPress={()=>this.props.navigation.navigate('Signup')} />
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
  },
  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255,255,255,0.3)',
    // borderRadius: 20
    paddingHorizontal: 16,
    fontSize: 16,
    marginVertical: 10,
    color: '#ffffff'
},
});