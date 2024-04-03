import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { Box, HomeLocation, HomeTopSong } from '@atoms'
import { SongDetail } from 'libs/utils/Types/UserProfile'

type Props = {
  location:any,
  topSong:SongDetail
}

const index = (props: Props) => {
  return (
    <Box flexDirection="row" justifyContent="flex-start" >

      <HomeTopSong songName={props.topSong.songName}/>
      <HomeLocation location={props.location}/>
    </Box>
  )
}

export default index

const styles = StyleSheet.create({})