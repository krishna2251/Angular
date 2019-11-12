/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,TextInput,TouchableOpacity,Alert } from 'react-native';

// import Logo from './components/logo';
import Login from './pages/Login';
import { createStackNavigator,createAppContainer } from 'react-navigation';
import Signup from './pages/Signup';


const AppStackNavigator = createStackNavigator({

  Login: Login,
  Signup:Signup
  
});
const App = createAppContainer(AppStackNavigator);

export default App;



  


// export default class App extends React.Component{

//   render(){
//     return({
      
//     })
//   }

// }
 //class App extends Component {
//   constructor(props) {

//     super(props)
//     this.Userregister = this.Userregister.bind(this)
//     this.state = {

//       firstName: '',
//       astName: '',
//       emailId: '',
//       mobileNumber: '',
//       password: '',

//     }

//   }
// //   componentDidMount() {
// //     this.Userregister();
// //  }
//   Userregister() {

//     console.log("Register");
//     fetch('http://192.168.1.6:8080/register', {

//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         "firstName": this.state._firstname,
//         "lastName": this.state._lastname,
//         "emailId": this.state._emailid,
//         "mobileNumber": this.state._mobilename,
//         "password": this.state._password,

//       })

//     }).then((response) => response.json())
//       .then((responseJson) => {

//         // Showing response message coming from server after inserting records.
//         // Alert.alert(responseJson);
//         Alert.alert(JSON.stringify(responseJson))

//       }).catch((error) => {
//         console.error(error);
//       });

//   }
 
  // render() {
  //   return (
      
  //     <View style={styles.container}>
  //       <AppStackNavigator />
        {/* <Login /> */}
        {/* <Logo /> */}
{/* <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="First Name"
                    placeholderTextColor="#ffffff" />
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Last Name"
                    // secureTextEntry={true}
                    placeholderTextColor="#ffffff" />
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Email"
                    // secureTextEntry={true}
                    placeholderTextColor="#ffffff" />
                 <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Mobile Number"
                    // secureTextEntry={true}
                    placeholderTextColor="#ffffff" />
                 <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Password"
                    // secureTextEntry={true}
                    placeholderTextColor="#ffffff" />

        <TouchableOpacity activeOpacity={.4} style={styles.buttonText} onPress={this.Userregister} >

          <Text style={styles.TextStyle}> Signup </Text>

        </TouchableOpacity> */}
      {/* </View>
    );
  }
} */}

{/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#546e7a',
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
button: {
    width: 300,
    backgroundColor: '#e91e63',
    marginVertical: 15,
    paddingVertical: 14,
    alignItems: 'center'
},

buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
   
}
}); */}

