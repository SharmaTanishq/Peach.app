import { StyleSheet } from 'react-native'
import React from 'react'
import Box from '../box'
import Text from '../text'
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

type Props = {
    text:string,
    icon:any;
}

const index = (props: Props) => {
  return (
    <Box
      paddingVertical='s16' 
      paddingHorizontal='s8'
      flexDirection='row'
      alignItems='center'
      justifyContent='space-between'
        >
      <Box  alignItems='center' flexDirection='row'>
          {props.icon}
        <Text color='white'  variant='regular18' marginLeft='s14' >{props.text}</Text>
      </Box>
      <Box flexDirection='row' alignItems='center' >
         <Text color='white'  variant='regular16' marginRight='s14'>None</Text>
         <SimpleLineIcons name="arrow-right" size={12} color="white" />
      </Box>
    </Box>
  )
}

export default index

const styles = StyleSheet.create({
    
})