import React, { useEffect }  from "react";
import { View, Text, StyleSheet } from 'react-native'
import { connect } from "react-redux";
import * as actions from '../actions'
import { facebookLogin } from "../actions";

const AuthScreen = () => {
// facebook modal is not showing up debug later
    useEffect(()=>{
       facebookLogin()

    })
   
    
    return(
        <View>
            <Text> AuthScreen </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default connect (null, actions )(AuthScreen)
