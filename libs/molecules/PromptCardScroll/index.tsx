import { Dimensions, Platform, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PromptCard } from '@atoms';
import Carousel from 'react-native-snap-carousel';

type Props = {}

const cards = [
  {
    title:"Item 1",
    heading:"I put this on when I need to relax",
    subHeading:"A song to chill out to",
    song:true
    
},
{
    title:"Item 2",
    heading:"First round is on me if you listen to",
    subHeading:"An artist that confirms your date has good music taste",
    song:false
},
{
    title:"Item 3",
    heading:"I put this on when I need to relax",
    subHeading:"A song to chill out to",
    song:true
},
{
    title:"Item 4",
    heading:"I put this on when I need to relax",
    subHeading:"A song to chill out to",
    song:true
},
{
    title:"Item 5",
    heading:"I put this on when I need to relax",
    subHeading:"A song to chill out to",
    song:false
}
  ]


const SPACING_FOR_CARD_INSET = Dimensions.get('window').width * 0.1 - 10

const index = (props: Props) => {

  
  
  return (
    <Carousel
      data={cards}
      contentContainerCustomStyle={{paddingLeft:SPACING_FOR_CARD_INSET}}      
      layout={'stack'}      
      sliderWidth={Dimensions.get('screen').width}
      itemWidth={350}
      enableSnap
      
      vertical={false}
      renderItem={({item,index}:any)=>( 
      <PromptCard 
        heading={item.heading!}
        subHeading={item.subHeading!}
        song={item.song!}        
        key={index}/>
        )}
    />
      
    
    
  
  )
}

export default index

const styles = StyleSheet.create({})