import React, {Component} from 'react';
import {Router, Stack, Scene } from 'react-native-router-flux';

import Login from './pages/login';
import Signup from './pages/Signup';
export default class Routes extends Component {

    render(){
        return (
            <Router>
                <Stack key="root">
                    <Scene key="login" component={Login} title="Login"/>
                    <Scene key="signup" component={Signup} title="Signup"/>
                </Stack>
                </Router>
        )
    }
}