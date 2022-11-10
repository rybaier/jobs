import React  from "react";
import { View, Text, StyleSheet } from 'react-native'
import { connect } from "react-redux";
import * as actions from '../actions'
import { facebookLogin } from "../actions";

const AuthScreen = () => {
    facebookLogin()
    return(
        <View>
            <Text> AuthScreen </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default connect (null, actions )(AuthScreen)