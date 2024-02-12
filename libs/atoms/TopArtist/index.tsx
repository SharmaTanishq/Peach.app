import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Box from '../box'
import { Dimensions } from 'react-native'
type Props = {}

const index = (props: Props) => {
  console.log( Dimensions.get('window').width)
  return (
    <Box style={{          
          width:'100%',
          height:'100%',                 
          justifyContent:'center',
          backgroundColor:"white"
          }} >
      <Image style={{width:"100%",height:'50%',borderRadius:50}}
      source={{uri:"https://www.punjabisitaare.com/wp-content/uploads/2023/03/karan-aujla-1024x576-800x800.jpg"}}></Image>
    </Box>
  )
}

export default index

const styles = StyleSheet.create({})