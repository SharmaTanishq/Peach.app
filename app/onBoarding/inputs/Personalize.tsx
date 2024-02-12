import { Image, StyleSheet } from 'react-native'

import React from 'react'
import OnboardingLayout from '../layout'
import { screenWidth } from '@constant/utils'
import { Box, CommonSolidButton, Header } from '@atoms'
import { router } from 'expo-router'

type Props = {}

const Personalize = (props: Props) => {
  return (
    <OnboardingLayout buttonHidden>
         <Box
        backgroundColor="background"
        flex={1}
        style={{
          width: screenWidth,
        }}
      >
         <Box mt="s48" paddingHorizontal="paddingHorizontal" flex={1}>
          <Header
              align='center'
              textAlign='center'
              heading="Personalize your experience"
              subHeading="Allow tracking to see special offers and personalized benefits just for you. You can change this later  "
            />
            <Box justifyContent='center' alignItems='center'>
            <Image
              
              style={{
                marginTop:40,
                width:300,
                height:300,
                objectFit:"contain"

              }}
              
              source={require('../../../assets/images/two.png')}
            />
            </Box>

          </Box>
      <Box  justifyContent='flex-end' flex={1} padding='s12' >
        
        <CommonSolidButton onPress={()=>{router.push('/(tabs)')}} title='Welcome'/>
      </Box>
      </Box>
    </OnboardingLayout>
  )
}

export default Personalize

const styles = StyleSheet.create({})