import { StyleSheet,  TouchableOpacity,  View } from 'react-native'
import React from 'react'
import { Stack, useNavigation } from 'expo-router'
import { Box, CircleBackground, Text } from '@atoms'
import { Settings, Ticket } from '@Icons'
import { theme } from '@theme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type Props = {}

export default function MyEvents  (props: Props) {
  const insets = useSafeAreaInsets()
  const navigation = useNavigation()
  return (
    <>
      <Stack.Screen
        options={{
          headerBackTitleVisible:true,
          headerTitle:"Edit Events",
          headerRight:()=><TouchableOpacity onPress={()=>{}}><Text color='white' variant='semiBold16'>Add</Text></TouchableOpacity>
        }}
      />
      <Box flex={1} backgroundColor='background' justifyContent='flex-start' alignItems='center' style={{paddingVertical:insets.top}}>
        <CircleBackground height={160} width={160} >
          
            {/* <Ticket size={140/2} color={theme.colors.primary}/> */}
            <Ticket size={140/2} color={theme.colors.primary}/>
          
        </CircleBackground>
        <Box  flex={1/6} justifyContent='space-around' paddingVertical='s12' alignItems='center'>
          <Text variant='semiBold18' color='white'>No Events</Text>
          <Text variant='light16' color='white'>You have no events currently</Text>
        </Box>
      </Box>
    </>
  )
}



const styles = StyleSheet.create({})