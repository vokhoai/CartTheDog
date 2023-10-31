import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Hear from './bottom_tab/Hear';
import Add from './bottom_tab/Add';
import Chat from './bottom_tab/Chat';
import User from './bottom_tab/User';
import Ionic from 'react-native-vector-icons/Ionicons'


const Tab = createBottomTabNavigator();
export default function Navigator() {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, size, color }) => {
              let iconName;
              if (route.name === "Home") {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === "Add") {
                iconName = focused ? 'add' : 'add-outline';
               
              } else if (route.name === "Hear") {
                iconName = focused ? 'heart' : 'heart-outline';
              } else if (route.name === "Chat") {
                iconName = focused ? 'chatbubble' : 'chatbubble-outline';
              }
              else if (route.name === "User") {
                iconName = focused ? 'person-sharp' : 'person-outline';
              }
              return <Ionic name={iconName} size={size} color={color} />;
            },
          })}>
            <Tab.Screen name="Home" component={Home}  options={{ headerShown: false }}/>
            <Tab.Screen name="Hear" component={Hear}  options={{ headerShown: false }}/>
            <Tab.Screen name="Add" component={Add}  options={{ headerShown: false }}/>
            <Tab.Screen name="Chat" component={Chat}  options={{ headerShown: false }}/>
            <Tab.Screen name="User" component={User}  options={{ headerShown: false }}/>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})