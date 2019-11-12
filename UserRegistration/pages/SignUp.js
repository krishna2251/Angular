import React from 'react';
import {StyleSheet, Text, View,StatusBar} from 'react-native';
import Logo from '../components/logo';
import Form from '../components/Form';



export default class Signup extends React.Component {

    constructor(){
        super(props);
        this.state={}
        this.register=this.register.bind(this)
        
    }
     register(){
        console.log("Register");
        fetch('http://192.168.1.8:8080/register',{

        method: 'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
        },
        body:JSON.stringify({
            "firstName":this.state._firstname,
            "lastName":this.state._lastname,
            "emailId":this.state._emailid,
            "mobileNumber":this.state._mobilename,
            "password":this.state._password,
            
        }),

        }).then((response) => response.json()).then((responseJson) => {
            this.setState({data:responseJson.status});
            console.log("Register successfully");
            return responseJson;
        })
        .catch((error) =>{
            console.error(error);
        });
        
    }
    render(){
        return(
            <View style={styles.container}>
               <Logo/>
               <Form />
               <View style={styles.singupTextCont}>
                {/* <Text style={styles.singupText}>
                    Already have an account
                </Text> */}
                {/* <Text style={styles.signupButton}> sing in</Text> */}
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
    // signupButton:{
    //     color:'#ffffff',
    //     fontSize:18,
    //     fontWeight:'500'
    // }
});

