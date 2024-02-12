
import { Tabs, useNavigation } from "expo-router";

import {  Text } from "@atoms";
import { theme } from "@theme";

import { Ionicons } from "@expo/vector-icons";

import { Ticket } from "@Icons";
import { useEffect } from "react";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */


export default function TabLayout() {
  
  useEffect(()=>{
   
    
  },[])
  return (
    <Tabs
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarStyle: {
        backgroundColor: theme.colors.background,
        borderTopWidth: 0,
        display: route.name === '()' ? 'none' : 'flex',
      },
      tabBarShowLabel: false,
    })}
    
    >
      <Tabs.Screen
         name="index"
        options={{
          
          
          tabBarIcon: ({ color }) => <Text variant="bold28">🍑</Text>,
        }}
      />
      <Tabs.Screen
        name="eventScreen"
        options={{
          title: "Tab Two",
          
          tabBarIcon: ({ color, focused }) => (
            <Ticket size={32} color ={focused ? theme.colors.primary : theme.colors.textInputLightBG}/>
          ),
        }}
      />
      
      <Tabs.Screen
        name="chatScreen"
        options={{
          title: "Tab Three",
          
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={28}
              color={
                focused ? theme.colors.primary : theme.colors.textInputLightBG
              }
            />
           
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        
        options={{
          //tabBarStyle:{display:'none'},
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name="person-circle-outline"
              size={28}
              color={
                focused ? theme.colors.primary : theme.colors.textInputLightBG
              }
            />
          ),
        }}
      />
    </Tabs>
  );
}
