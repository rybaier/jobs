import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef, navigate } from './RootNavigation';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import DeckScreen from './screens/DeckScreen';
import MapScreen from './screens/MapScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingScreen from './screens/SettingScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './store';
import { lazy } from 'react';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const SecondaryNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Review' component={ ReviewScreen } options={{
        title: 'Review Jobs',
        headerRight: () => (
          <TouchableOpacity onPress={ () => navigate("Settings")}>
            <Text style= {styles.buttonText}> Settings </Text>
          </TouchableOpacity>
        )
      }} />
      <Stack.Screen name= 'Settings' component={ SettingScreen } />
    </Stack.Navigator>
  )
}
const MainNavigator = () => {
  return(
    <Tab.Navigator>
    <Tab.Screen name= 'Map' component={ MapScreen }/>
    <Tab.Screen name = 'Deck' component={ DeckScreen } />
    <Tab.Screen name = 'Review' component={ SecondaryNavigator} options={{ headerShown: false}}/>
  </Tab.Navigator>
  )
}

const PrimaryNavigator = () => {
  return (
      <Tab.Navigator initialRouteName='Welcome' screenOptions={ lazy }>
        <Tab.Screen name = "Welcome" component={ WelcomeScreen }/>
        <Tab.Screen name = "Auth" component={ AuthScreen } />
        <Tab.Screen name = 'Main' component= { MainNavigator } options={{ headerShown: false }}/>
      </Tab.Navigator>
  )
}

export default function App() {


  return (
    <Provider store = {store}>
      <NavigationContainer ref={ navigationRef }>
        <Stack.Navigator initialRouteName='Welcome'>
          <Stack.Screen name = "Primary" component={ PrimaryNavigator } options={{ headerShown: false }}/>
          <Stack.Screen name = 'Main' component= { MainNavigator } options={{ headerShown: false }}/>
          <Stack.Screen name = "Secondary" component={ SecondaryNavigator } options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'rgba(0,122,255,1)'
  }
});
