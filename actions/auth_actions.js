import { Facebook } from 'expo'
import { AsyncStorageStatic } from 'react-native'
import { FACEBOOK_LOGIN_SUCCESS } from "./types";

// How to use AsyncStorage:
// AsyncStorage.setItem('fb_token' , token)
// AsyncStorage.setItem('fb_token)

export const facebookLogin = () => async (dispatch) => {   
    let token = await AsyncStorageStatic.getItem('fb_token')

    if (token) {
        //dispatch an action saying FB login is done
        dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token })
    } else {
        // start up FB login process
        doFacebookLogin(dispatch)
    }
}


const doFacebookLogin = async (dispatch) => {
    let { type, token } = await Facebook.logInWithReadPermissionsAsync('679023733836267', {
        permissions: ['public_profile']
    });
    if ( type === 'cancel') {
        return (dispatch({ type: FACEBOOK_LOGIN_FAIL}) )
    }

    await AsyncStorageStatic.setItem('fb_token', token)
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token})
}