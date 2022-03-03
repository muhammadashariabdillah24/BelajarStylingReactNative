/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { SplashScreen } from './src/SplashSceen';
import { ScreenOne } from './src/Screen1'
import { ScreenTwo } from './src/Screen2';
import { Calendars } from './src/Calendar';
import { Adhanschedule } from './src/AdhanSchedule';
import { Prayerschedule } from './src/PrayerSchedule';
import { Fridaypreacher } from './src/FridayPreacher';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Animated, Easing, StatusBar } from 'react-native';

const Stack = createStackNavigator();
const menuBottom = createBottomTabNavigator();

class ScreenForScreenTwo extends Component{

  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen 
          name="Welcome"
          component={ScreenTwo}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    )
  }
}

class ScreenForScreenOne extends Component {

  render() {
    return (
      <menuBottom.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Timetable") {
              iconName = "alarm-outline"
            } else if(route.name === "Calendar"){
              iconName = "calendar-outline"
            } else if(route.name === "Adhan Schedule"){
              iconName = "volume-high-outline"
            } else if(route.name === "Prayer Schedule"){
              iconName = "timer-outline"
            } else if(route.name === "Friday Preacher"){
              iconName = "volume-high-outline"
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },
            tabBarStyle : {backgroundColor : '#fff'},
            tabBarActiveTintColor: '#4ECB71',
            tabBarInactiveTintColor: '#d3d3d3'
        })}
      >
        <menuBottom.Screen
          name="Timetable" component={ScreenOne} options={{ headerShown: false }}
        />

        <menuBottom.Screen 
          name="Calendar" component={Calendars} options={{headerShown : false}}
        />

        <menuBottom.Screen 
          name="Adhan Schedule" component={Adhanschedule}  options={{headerShown : false}}
        />

        <menuBottom.Screen 
          name="Prayer Schedule" component={Prayerschedule} options={{headerShown : false}}
        />

        <menuBottom.Screen 
          name="Friday Preacher" component={Fridaypreacher} options={{headerShown : false}}
        />
      </menuBottom.Navigator>
    )
  }
}


class App extends Component {



  render() {
    return (
      <NavigationContainer>
        <StatusBar
          backgroundColor="#4ECB71"
        />
        <Stack.Navigator>
          <Stack.Screen 
            name="SplashScreen" 
            component={SplashScreen} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Selamat Datang"
            component={ScreenForScreenTwo}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={ScreenForScreenOne}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}


export default App;