import { Dimensions, Image, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {Box, HomePrompt, Text} from '@atoms'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { UserScreenType } from 'libs/utils/Types/UserProfile';


type Props = {
    data:UserScreenType;
    userProfileImage:string,
}

const index = (props: Props) => {
   const insets = useSafeAreaInsets();
  return (
    <
    
  > 
     
        
        <HomePrompt data={props.data} userProfileImage={props.userProfileImage}/>
     
     
  </>
   
  )
}

export default index

const styles = StyleSheet.create({})