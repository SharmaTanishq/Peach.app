import { StyleSheet } from 'react-native'
import React from 'react'
import Box from '../box'
import { MusicNoteIcon } from '@Icons'
import { Marquee } from '@animatereactnative/marquee'
import Text from '../text'

type Props = {
    songName?:String
}

const index = (props: Props) => {
  return (
    <Box flexDirection="row"  alignItems="center" alignSelf="flex-start" flex={1/3} marginRight="s12">
      {props.songName?
        <>
            <MusicNoteIcon size={20}/>
            <Marquee spacing={20} speed={0.3}>
              <Text color="white" variant="semiBold12">{props.songName}</Text>
            </Marquee>
        </>
          :
          <>
          </>}
        
    </Box>
  )
}

export default index

