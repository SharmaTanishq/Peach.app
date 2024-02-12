import { Image, StyleSheet,  View } from 'react-native'
import React from 'react'
import { Box ,CommonSolidButton,Text,} from '@atoms'

type Props = {
    songImg:string,
    songName:string,
    songArtist:string
    isSong:Boolean
}

 

const index:React.FC<Props> = (props: Props) => {
  const imgWidthHeight = props.isSong?50:60;
  return (

             <Box
                flexDirection="row"
                alignItems="center"
                justifyContent="space-around"
                marginBottom="s18"
              >
                <Box
                  
                  justifyContent="flex-start"
                  alignItems="center"
                  flexDirection="row"
                  flex={2}
                >
                  <Image
                    key={props.songArtist}
                    source={{ uri: props.songImg }}
                    width={imgWidthHeight}
                    height={imgWidthHeight}
                    style={{ borderRadius: props.isSong?10:100 }}
                  />
                  <Box
                    marginLeft="s18"                    
                    height={40}
                    justifyContent={props.isSong? "space-between":"center"}
                  >
                    {props.isSong? <Text variant="semiBold18" color="white">
                      {props.songName}
                    </Text>:<></>}
                   
                    <Text variant={props.isSong? "regular12":"semiBold16"} color="white">
                      {props.songArtist}
                    </Text>
                  </Box>
                </Box>
                <Box flex={1 / 1} maxWidth={90}>
                  <CommonSolidButton
                    title="Select"
                    onPress={() => {}}
                    style={{
                      height: 35,
                    }}
                  />
                </Box>
              </Box>
  )
}

export default index

const styles = StyleSheet.create({})