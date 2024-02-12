import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react'
import { Box, CommonSolidButton } from '@atoms'

interface Props {
    children?:React.ReactNode
    buttonHidden?:Boolean;
    handleIndexPositive?:()=>void;
    
}


const OnboardingLayout = ({children,buttonHidden,handleIndexPositive}:Props) => {
    
  return (
    <View>
      {children}
     
        {buttonHidden?<></>:
            (<Box justifyContent="flex-end" padding="s12">
              <CommonSolidButton title='Next' onPress={handleIndexPositive!}/>
            </Box>)
        }
        
     
    </View>
  )
}

export default OnboardingLayout

const styles = StyleSheet.create({})