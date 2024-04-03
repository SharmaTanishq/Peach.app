import { Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Box from '../box'
import { theme } from '@theme'
import Text from '../text'
import { Marquee } from '@animatereactnative/marquee'
import { Bookmark, ShareIcon } from '@Icons'
import { screenWidth } from '@constant/utils'


type Props = {
    userProfileImage?:string,
    data:any,
}

const index = (props: Props) => {
  return (
    <Box backgroundColor='white' borderRadius={15} zIndex={2}  minHeight={200} justifyContent='space-evenly' alignItems='center' width={screenWidth-30} paddingVertical='s12'>
          <Box marginTop='s18'>
          <Box position='absolute' bottom={0} left={0} right={0} justifyContent='center'  alignItems='center'>
            <Image source={{uri:props.userProfileImage}} width={70} height={70} style={{
              borderRadius:100,
              borderWidth:3,
              borderColor:'white'
              
            }}>              
            </Image>
            <Box width={25} height={25} style={{
              borderRadius:100,              
              borderWidth:2,
              borderColor:'white',
              bottom:0,
              left:15, 
              backgroundColor:theme.colors.primary,
              position:'absolute',                            
            }}>              
            </Box>
           
          </Box>
          </Box>
          <Box  alignItems='flex-end'  maxWidth={250}  >
            <Text variant='regular18'  textAlign='center' color='seriousBlack'>{props.data.screenData.promptTitle}...</Text>
          </Box>
          <Box flexDirection='row' justifyContent='space-evenly'  width={'100%'}>
            <Image source={{uri:props.data.screenData.promptAnswer.promptImage}} width={80} height={80} style={{
              borderRadius:10,
            }}/>
            <Box justifyContent='center' alignItems='flex-start' >
              <Text variant='regular18' color='seriousBlack' >{props.data.screenData.promptAnswer.answer}</Text>
              <Marquee spacing={20} speed={0.3} style={{maxWidth:120}}>
                  <Text color='grey'>{props.data.screenData.promptAnswer.artist}</Text>
              </Marquee>
             
            </Box>
            <Box flexDirection='row' justifyContent='center' alignItems='center'>
              <TouchableOpacity onPress={()=>{console.log('ge')}}>
                <ShareIcon width={60} height={60}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{}}>
                <Bookmark size={30} />
              </TouchableOpacity>
            </Box>
          </Box>
        </Box>
  )
}

export default index