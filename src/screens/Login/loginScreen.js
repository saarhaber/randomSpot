
import React, { Component } from 'react';
import {
  View, Button, StyleSheet
} from 'react-native';

import authHandler from "../../utils/authenticationHandler";

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'black',
    }
  });
  

class LoginScreen extends Component {
    state = {  }
    render() {
        return (
            <View style={styles.container}>
                <Button onPress={() => authHandler.onLogin()} title="Press to login!"/>
            </View>
        );
    }
}

export default LoginScreen;