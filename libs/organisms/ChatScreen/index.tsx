import { StyleSheet, } from 'react-native'
import React from 'react'
import { Box, Text,Header } from '@atoms'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { screenWidth } from '@constant/utils'
import { Conversations, LikesYou } from '@molecules'



type Props = {}

const index = (props: Props) => {
    const insets = useSafeAreaInsets();
  return (
    <Box flex={1}>
      <Box
        flex={1}
        style={{ paddingTop: insets.top, paddingBottom: insets.bottom,width: screenWidth, }} 
        >
         <Box mt="s48" paddingHorizontal="paddingHorizontal" flex={1}>
          <Header
            heading="Inbox"
            subHeading=""
          />
            <LikesYou/>
          
            <Conversations/>
          
        </Box>
        
      </Box>
      
    </Box>
  )
}

export default index

const styles = StyleSheet.create({})