import React, {Component} from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';


export default class Logo extends Component {
    render(){
        return(
            //<Text>Logo</Text>
            <View>
            <Image style={{width:40, height:60}}
            source={require('../images/logo.png')}/>
            <Text style={styles.logText}>Welcome to DMantz</Text>
            </View>
        )
    }

}

const styles =StyleSheet.create({
    container :{
        flexGrow:1,
        justifyContent:'flex-end',
        alignItems:'center'

    },
    logText:{
        fontSize:18,
        marginVertical:16,
        color:'rgba(255,255,255,0.7)'
    }
});