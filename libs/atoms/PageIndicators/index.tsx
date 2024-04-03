import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Box from '../box'



const index = ({isActive}:{isActive:Boolean}) => {
  return (
    <Box paddingBottom='s18' paddingHorizontal='s2'>
      <TouchableOpacity onPress={()=>{}}>
            <Box width={18} height={3} borderRadius={5} style={{
              backgroundColor:isActive?'white':'grey'
            }}  />
      </TouchableOpacity>
    </Box>
  )
}

export default index

const styles = StyleSheet.create({})