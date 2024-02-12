import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Box, CommonSolidButton, SharedHeader } from '@atoms'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { MyBasics, PhotoGallery } from '@organisms'


type Props = {}

const EditProfile = (props: Props) => {
    const insets = useSafeAreaInsets();
  return (
    <>
        <Stack.Screen
            options={{ 
                    title:"Edit Profile",
                }}
        />
        <Box
         flex={1} 
         backgroundColor='background' 
         justifyContent='flex-start' 
         alignItems='center' 
         paddingHorizontal='s12'

        >
            <ScrollView style={{width:'100%'}} contentContainerStyle={{
                padding:5,
                paddingVertical:20
                
            }} >
                <Box  paddingHorizontal='s2'>
                    
                    <CommonSolidButton 
                      onPress={()=>{}}
                      title='Preview Profile'/>
                </Box>

                <Box marginTop='s24' paddingVertical='s8'>
                    <SharedHeader 
                    title={`I'm interested in`}
                    subtitle='Filter people by gender'
                    />

                    <PhotoGallery />

                </Box>
                <Box marginTop='s24' paddingVertical='s8'>
                    <SharedHeader 
                        title={`My basics`}
                        subtitle='Add basic information to complete your profile'
                    />
                    <MyBasics/>

                </Box>
                <Box marginTop='s24' paddingVertical='s8'>
                    <SharedHeader 
                        title={`My Artists`}
                        subtitle='Stand out by featuring your latest artist'
                    />
                     <Box
                        height={100}
                        width={100}
                        style={{
                            alignItems: "center",
                            position: "relative",
                        }}
                        >
                    <Image
                    source={{ uri: "https://i.scdn.co/image/ab6761610000e5ebaf94287a28816f8bfb8776e1" }}
                    style={{
                      width: "75%",
                      height: "75%",
                      borderRadius: 120 / 2,
                    }}
                  ></Image>
                  <Text
                    style={{ color: "white", marginTop: 10 }}
                  >
                    Karan Aujla
                  </Text>
                </Box>
                </Box>
                <Box marginTop='s24' paddingVertical='s8'>
                    <SharedHeader 
                        title={`My answers`}
                        subtitle='Show off your personality through music'
                    />
                </Box>
                <Box marginTop='s24' paddingVertical='s8'>
                    <SharedHeader 
                        title={`My genres`}
                        subtitle='Display your favourite sound categories'
                    />
                </Box>
                <Box marginTop='s24' paddingVertical='s8'>
                    <SharedHeader 
                        title={`My top songs`}
                        subtitle='Add at least 2 songs to complete your profile'
                    />
                </Box>
                <Box marginTop='s24' paddingVertical='s8'>
                    <SharedHeader 
                        title={`My saved events`}
                        subtitle='Add at least 2 events to complete your profile'
                    />
                </Box>
                
            </ScrollView>
        </Box>
    </>
  )
}

export default EditProfile

const styles = StyleSheet.create({})