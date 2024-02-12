import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Box, TopArtist } from '@atoms'
import { Dimensions } from 'react-native'

type Props = {}

const index = (props: Props) => {
  const vw=(percentageWidth:any)=> {
    return Dimensions.get('window').width * (percentageWidth / 100);
  } 
  return (
    <Box style={{ justifyContent:'center',alignItems:"center",margin:10}}>
      <TopArtist/>  
      <Text style={{color:'white',paddingBottom:20}}>Karan Aujla</Text>   
    </Box>
  )
}

export default index

const styles = StyleSheet.create({})