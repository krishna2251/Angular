import React, {Component} from 'react';
import {StyleSheet, Text, View,StatusBar,TouchableOpacity} from 'react-native';
import Logo from '../components/logo';
import Form from '../components/Form';
import {Actions} from 'react-native-router-flux';

export default class Login extends Component {

    // signup(){
    //     Actions.signup()
    // }
    render(){
        return(
            <View style={styles.container}>
               <Logo/>
               
               <View style={styles.singupTextCont}>
               <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Email"
                    placeholderTextColor="#ffffff" />
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="#ffffff" />
                    <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
               </View>
            </View>
        )
    }

}
const styles =StyleSheet.create({
    container :{
        backgroundColor:'#455a64',
        flex:1,
        alignItems:'center',
        justifyContent :'center'
    },
    singupTextCont:{
        flexGrow:1,
        alignItems:'flex-end',
        justifyContent :'center',
        marginVertical:16,
        flexDirection:'row',
        paddingVertical:16

    },
    singupText:{
        color:'rgba(255,255,255,0.7)',
        fontSize:18
    },
    signupButton:{
        color:'#ffffff',
        fontSize:18,
        fontWeight:'500'
    },inputBox: {
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
        color: '#ffffff'
    },

});