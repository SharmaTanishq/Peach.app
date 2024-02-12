import { Dimensions, StyleSheet,  View } from 'react-native'
import React from 'react'
import { theme } from '@theme';
import Box from '../box';
import {  router } from 'expo-router';
import Text from '../text';

import CommonSolidButton from '../CommonSolidButton';
import { Entypo, Feather } from '@expo/vector-icons';



const CARD_WIDTH = Dimensions.get('window').width * 0.8;
const CARD_HEIGHT = Dimensions.get('window').height * 0.6;


type Props = {
    
    heading:string,
    subHeading:string,
    song:boolean,
}

const index 
= (props: Props) => {
  

 
  return (
    <Box style={styles.cardStyle}>
      <Box flex={1} justifyContent='flex-end' paddingBottom='s28' alignItems='center'>
        <Text variant="semiBold24" color='white' textAlign='center'>{props.heading?props.heading+'...':''}</Text>
        <Text variant="light18" mt="s16" lineHeight={25}>
          {props.subHeading?props.subHeading:''}
        </Text>
      </Box>
      <Box  
        backgroundColor='textInputLightBG' 
        borderColor='black' 
        padding='s12' 
        marginLeft='s20'
        alignSelf='flex-start'
        borderRadius={100} 
        flexDirection='row' 
        alignItems='center'>
        <Feather name={props.song?"music":"mic"} size={18} color="white" />
        <Text variant='semiBold16' marginLeft='s10'>{props.song?"Song":"Artist"}</Text>
      </Box>
    <Box width="100%" flex={1} justifyContent='flex-end'>
      <CommonSolidButton title='Answer' onPress={()=>router.push('/onBoarding/inputs/PromptAnswer')}  />
      
    </Box>
      
    
   </Box>
  )
  
}

export default index

const styles = StyleSheet.create({
    cardStyle: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        padding:24,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.textInputBg,
        margin: 5,
        borderRadius: 15
      }
})