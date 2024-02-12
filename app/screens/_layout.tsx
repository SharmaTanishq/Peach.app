import { StyleSheet,  TouchableOpacity,  View } from 'react-native'
import React from 'react'
import { Text } from '@atoms'
import { Stack, useNavigation } from 'expo-router'
import { theme } from '@theme'

type Props = {}

const EditProfileLayout = (props: Props) => {
  const navigation = useNavigation()
  return (
    <Stack screenOptions={{ 
        headerLeft:(()=><TouchableOpacity onPress={()=>navigation.goBack()}><Text color='white'> Back </Text></TouchableOpacity>),
        headerBackTitle:"sfgaf",
        headerTitleStyle:{
          color:'white'
        }, 
        headerStyle:{
          backgroundColor:theme.colors.background
        },
        headerTintColor: 'white',
         }}>
      <Stack.Screen name='editProfile'/>
      <Stack.Screen name='matchingPreferences'/>
      <Stack.Screen name='myEvents'/>
      <Stack.Screen name='savedSongs'/>
    </Stack>
  )
}

export default EditProfileLayout

const styles = StyleSheet.create({})