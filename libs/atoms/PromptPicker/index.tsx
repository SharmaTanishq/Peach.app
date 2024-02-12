import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Box from '../box'
import Text from '../text'
import { AntDesign } from '@expo/vector-icons'; 

import { router } from 'expo-router';
import { theme } from '@theme'
type Props = {}

const index = (props: Props) => {
 
  
  return (
    <TouchableOpacity
        onPress={()=>router.push("/onBoarding/inputs/SelectPrompt")}
        style={{
            position:'relative',
            width:'100%',
            height:"45%",
            padding:5,
            marginBottom:10,
            flex:1,
            backgroundColor:theme.colors.textInputBg,
            justifyContent:'center',
            borderRadius:10,
            alignItems:'center',
        }}
    
    >
     
        <Text  variant="light18" color='white'  >Add an answer</Text>
        <Box style={{alignSelf:"flex-end",position:'absolute',top:95,backgroundColor:theme.colors.primary,borderRadius:100,padding:4}}>
            <AntDesign name="plus" size={20} color="white" />
        </Box>
     
    </TouchableOpacity>
  )
}

export default index

const styles = StyleSheet.create({})