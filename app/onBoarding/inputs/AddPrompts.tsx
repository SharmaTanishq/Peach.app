import { StyleSheet} from 'react-native'
import React from 'react'
import OnboardingLayout from '../layout'
import { Box, PromptPicker,Header } from '@atoms'
import { screenWidth } from '@constant/utils'



type Props = {
  handleIndex:()=>any;
}

type Nav = {
  navigate: (value: string) => void;
}

const AddPrompts = (props: Props) => {
  

  return (
    <OnboardingLayout  handleIndexPositive={props.handleIndex} >
        <Box
        backgroundColor="background"
        flex={1}
        style={{
          width: screenWidth,
        }}
      >
        <Box mt="s48" paddingHorizontal="paddingHorizontal" flex={1}>
          <Header
            heading="Add Profile Answers"
            subHeading="Prompt boosts your chance of getting noticed! Add at least 3 prompts. You can change these later."
          />         
          
          <Box style ={{ flex:1,paddingTop:10,justifyContent:'flex-start',paddingBottom:70}}>
              <PromptPicker  />

              <PromptPicker/>

              <PromptPicker/>          
          </Box>
        
          
       
        </Box>
      </Box>
    </OnboardingLayout>
  )
}

export default AddPrompts

const styles = StyleSheet.create({})