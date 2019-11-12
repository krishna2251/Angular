import React, {Component} from 'react';
import {StyleSheet, Text, View,StatusBar} from 'react-native';
import Logo from '../components/logo';
import Form from '../components/Form';

export default class Signup extends Component {
    render(){
        return(
            <View style={styles.container}>
               <Logo/>
               <Form type="Singup"/>
               <View style={styles.singupTextCont}>
                <Text style={styles.singupText}>
                    Already have an account
                </Text>
                <Text style={styles.signupButton}> sing in</Text>
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
    }
});

