import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default class Form extends Component {
    render() {
        return (
            //<Text>Logo</Text>
            <View>
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
                    <Text style={styles.buttonText}>{this.props.type}</Text>
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'flex-end'

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
        color: '#ffffff'
    }
});