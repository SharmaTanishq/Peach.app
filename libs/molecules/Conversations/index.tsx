import { StyleSheet, View } from 'react-native'
import * as React from 'react'
import { Box, CircleBackground, Text } from '@atoms'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '@theme'

type Props = {}

const index = (props: Props) => {
  const [conversations,setConversations] = React.useState([null])
  
  return (
    <Box>
       <Text color='white' variant='semiBold18' marginBottom='s18' >Conversations</Text>
        <Box flexDirection='row'>
            <CircleBackground
              width={70}
              height={70}                         
            >
                <Ionicons name="chatbubble-ellipses-outline" size={28} color={theme.colors.primary} />
            </CircleBackground>

            <Box  justifyContent='space-around' paddingVertical='s2' paddingHorizontal='s10' maxWidth={'70%'} >
                <Text color='white' variant='semiBold16' >No Conversations Yet</Text>
                <Text color='white' lineHeight={17}  >Your new conversations will be shown here</Text>
            </Box>
        </Box>
    </Box>
  )
}

export default index

const styles = StyleSheet.create({})