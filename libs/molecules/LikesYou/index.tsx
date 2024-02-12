import { StyleSheet } from 'react-native'
import * as React from 'react'
import { Box, CircleBackground, Text } from '@atoms'
import { generateRandomLikes } from 'libs/utils/Faker/getLikes'
import { Feather } from '@expo/vector-icons'
import { theme } from '@theme'

type Props = {}


const index = (props: Props) => {
    
    const [likes,setLike] = React.useState(generateRandomLikes())
    

  return (
    <Box marginBottom='s40'>
        <Text color='white' variant='semiBold18' marginBottom='s18' >Likes You</Text>
        <Box flexDirection='row'>
            <CircleBackground
              width={70}
              height={70}                         
            >
                <Feather name="heart" size={28} color={theme.colors.primary} />
            </CircleBackground>

            <Box  justifyContent='space-around' padding='s10' >
                <Text color='white' variant='semiBold16' >No Likes Yet</Text>
                <Text color='white' >Your new likes will be shown here</Text>
            </Box>
        </Box>
    </Box>
  )
}

export default index

const styles = StyleSheet.create({})