import React  from "react";
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView } from "react-native-gesture-handler";
import Slides from "../components/Slides";
import { navigate } from "../RootNavigation";

const WelcomeScreen = () => {

    const onSlidesComplete = () => {
        navigate('Auth')
    }

    const SLIDE_DATA = [
        {text: 'Welcome to JobApp', color: '#03A9F4'},
        {text: 'Use this to get a Job', color: '#009688'},
        {text: 'Set your location then swipe away', color: '#03A9F4',}
    ]
    return(
        
            <Slides data= { SLIDE_DATA } onComplete={ onSlidesComplete }/>
       
    )
}

const styles = StyleSheet.create({
    
})

export default WelcomeScreen