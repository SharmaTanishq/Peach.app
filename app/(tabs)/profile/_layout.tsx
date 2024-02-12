import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Stack, useNavigation } from 'expo-router'
import { Text } from '@atoms'
import { theme } from '@theme'

type Props = {}

export default function TabLayout() {
  const navigation = useNavigation()
  return (
    <Stack screenOptions={{
      headerBackTitleVisible:true,
      
      headerTitleStyle:{
        color:'white'
      },      
      headerStyle:{
        backgroundColor:theme.colors.background
      },
      headerTintColor: 'white',
      //headerLeft:()=><TouchableOpacity onPress={()=>navigation.getParent}><Text color='white' >Back</Text></TouchableOpacity>
    }}>
      <Stack.Screen name ='myProfile'  />     
    
      
    </Stack>
  )
}

