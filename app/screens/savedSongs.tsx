import { StyleSheet,  TouchableOpacity,  View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Box, CircleBackground, Text } from '@atoms'
import { Bookmark, Settings, Ticket } from '@Icons'
import { theme } from '@theme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
type Props = {}

export default function SavedSongs  (props: Props) {
  const insets = useSafeAreaInsets()
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle:"Saved Songs",
          
        }}
      />
      <Box flex={1} backgroundColor='background' justifyContent='center' alignItems='center' style={{paddingVertical:insets.top}}>
        <CircleBackground height={160} width={160} >
          
            {/* <Ticket size={140/2} color={theme.colors.primary}/> */}
            <Bookmark size={140/2} color={theme.colors.primary}/>
          
        </CircleBackground>
        <Box  flex={1/6} justifyContent='space-around' paddingVertical='s12' alignItems='center'>
          <Text variant='semiBold18' color='white'>No Saved Songs</Text>
          <Text variant='light16' color='white'>Find music to save to your collection!</Text>
        </Box>
      </Box>
    </>
  )
}



const styles = StyleSheet.create({})