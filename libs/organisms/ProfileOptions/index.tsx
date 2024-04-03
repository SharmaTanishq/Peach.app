import { Image, ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Box,CircleBackground,PageIndicators,Text } from '@atoms'
import { screenWidth } from '@constant/utils'
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Genres, TopSong_Location } from '@molecules';
import { Close, LoveSolid } from '@Icons';
import { theme } from '@theme';
import { BlurView } from 'expo-blur';
import { UserProfileData } from 'libs/utils/Types/UserProfile';


type Props = {
    data:UserProfileData,
    currentIndex:number,
}

const index = (props: Props) => {
    const bottomTabBarHeight = useBottomTabBarHeight(); 
  return (
    <Box flex={1} height={'100%'}   paddingHorizontal="s14" justifyContent="space-evenly" alignItems="flex-start"  style={{
        width:screenWidth,
        flexDirection:'row',
        zIndex:1,
        
       }}>
        
        
          <Box flex={1} height={'100%'} justifyContent='flex-end' paddingVertical='s12'   style={{
                
          }}  >
              <Box  justifyContent="center" alignItems="flex-start" marginBottom="s16"  >
                    <Box flexDirection='row' justifyContent='center' alignItems='center' >
                        <Image source={{uri:"https://pbs.twimg.com/media/FpojXkgaYAIDUP1.jpg"}} 
                        style={{
                            borderRadius:50,
                            width:45,
                            height:45,
                        }}/>
                        <Text color="white" variant="semiBold24" marginLeft="s14">Karan Aujla</Text>    
                    </Box>
                   
                        <Genres data={props.data.genres}/>
                   
                </Box>
                
                {/* Indicator */}
                <Box>
                      <Box flexDirection='row' paddingHorizontal='s10' justifyContent='flex-start' >
                    {props.data.userScreens.map((_,index)=>(
                      <PageIndicators key={index} isActive={props.currentIndex === index} />
                    ))}
                    </Box>
                    
                    <TopSong_Location location={props.data.userLocation} topSong={props.data.topSong}/>
                </Box>
                            
                
          </Box>
        
          <Box height={'100%'}   alignItems="center" justifyContent="space-between"  paddingVertical='s12' >
              <TouchableOpacity>
                      <CircleBackground  
                          width={50}
                          height={50} 
                          color={true} 
                        >
                        <LoveSolid width={26} height={26} fill={theme.colors.white}/>
                      </CircleBackground> 
                    </TouchableOpacity>


                      <TouchableOpacity>
                          <BlurView 
                          intensity={20}
                          style={{
                            width:50,
                            height:50,
                            overflow:'hidden',
                            borderRadius:50,
                            justifyContent:'center',
                            alignItems:'center'
                          }}>
                              <Close width={26} height={26} stroke={theme.colors.white}/>
                          </BlurView>            
                      </TouchableOpacity>
                      <ImageBackground source={{uri:'https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Music-PNG/Vinyl_Record_PNG_Transparent_Clipart.png'}}
                        style={{
                          width:50,
                          height:50,
                          justifyContent:'center',
                          alignItems:'center'
                        }}
                      >
                        <Image source={{uri:'https://linkstorage.linkfire.com/medialinks/images/e423594e-d975-4a5d-a428-1a15c8821c5a/artwork-440x440.jpg'}} width={35}height={35} borderRadius={50} />
                      </ImageBackground>  
          </Box>
        </Box>
  )
}

export default index

const styles = StyleSheet.create({})