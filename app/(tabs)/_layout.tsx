
import { Tabs } from "expo-router";

import {  Box, Text } from "@atoms";
import { theme } from "@theme";

import { Ionicons } from "@expo/vector-icons";

import { Ticket,Chat,Notification, HomeIcon } from "@Icons";
import { useEffect } from "react";
import { TouchableOpacity } from "react-native";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */


export default function TabLayout() {
  
  useEffect(()=>{
   
    
  },[])
  return (
    <Tabs
    screenOptions={({ route }) => ({
      headerShown:false,
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
          headerShown:true,
          headerTransparent:true,
          headerTitle:"",                    
          headerLeft:()=>
            <Box flexDirection="row" justifyContent="center" alignItems="center" paddingHorizontal="s24">
              <Text color="white" variant="semiBold24">Peach </Text>
              <Text color="white" variant="regular16">| G - town </Text>
              <TouchableOpacity>
                
              </TouchableOpacity>
            </Box>,
          headerRight:()=>
          <Box flexDirection="row"  flex={1} justifyContent="space-around" alignItems="center" marginRight="s18"  width={100} >
            <TouchableOpacity>
              <Notification size={38} color ={"white"} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Chat size={32} color ={"white"}/>
            </TouchableOpacity>
          </Box>,
          tabBarIcon: ({ color,focused }) =><HomeIcon size={32} color ={focused ? theme.colors.primary : theme.colors.textInputLightBG} />,
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
            
            <Chat size={36} color ={focused ? theme.colors.primary : theme.colors.textInputLightBG}/>
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
