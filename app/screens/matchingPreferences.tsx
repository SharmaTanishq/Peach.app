import { ScrollView, StyleSheet,  View } from 'react-native'
import * as React from 'react'
import { Stack, Tabs } from 'expo-router'
import { Box, Header,Text, SlidingTabs, SharedHeader, CommonSolidButton } from '@atoms'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { TabButton } from 'app/onBoarding/inputs/SelectPrompt'

import { RangeSlider } from '@react-native-assets/slider'
import { theme } from '@theme'
import { Slider } from 'react-native-awesome-slider'
import { useSharedValue } from 'react-native-reanimated'
import { faker } from '@faker-js/faker'


type Props = {}

const buttons: TabButton[] = [
  { title: "Men", accessibilityLabel: "Men", onPress: () => {} },
  {
    title: "Women",
    accessibilityLabel: "Women",
    onPress: () => {},
  },
  {
    title: "Everyone",
    accessibilityLabel: "Everyone",
    onPress: () => {},
  },
];

export default function MatchingPreferences  (props: Props) {
  const insets = useSafeAreaInsets();
  const [selectedTab, setSelectedTab] = React.useState(0);
  
  const [range,setRange]  = React.useState<[number,number]>([0,80])
  const [miles,setMiles] = React.useState(0);

  const handlePressCb = (index: number) => {
    setSelectedTab(index);
  };

  React.useEffect(()=>{

  },[])

  return (
    <>
      
      <Stack.Screen options={{
        
        title:"Preferences"
        
        
      }}/>
       <Box flex={1} 
            backgroundColor='background' 
            justifyContent='flex-start' 
            alignItems='center' 
            paddingHorizontal='s18'
            
            style={{paddingTop:insets.top,
              
            }}>
              <ScrollView>

              <Box width={'100%'} flexDirection='column' paddingHorizontal='s2' marginBottom='s24'>
                <SharedHeader 
                  title={`I'm interested in`}
                  subtitle='Filter people by gender'
                   />
                    <SlidingTabs
                      tabData={buttons}
                      tabHolderMaxWidth={500}
                      handlePress={handlePressCb}
                      width={350}
                    
                      
                      />
              </Box>

              <Box width={'100%'} flexDirection='column' paddingHorizontal='s2' marginBottom='s24'>
                <SharedHeader 
                  title={`Age`}
                  subtitle='Filter people by age'
                   />
                    <Box 
                      backgroundColor='textInputBg' 
                      borderRadius={20}
                      padding='s20'
                >
                    <Text variant='regular16' color='white' marginBottom='s20'>
                        {`Between ${Math.round(range[0])} and ${Math.round(range[1])}` }
                        </Text>
                   
                    <RangeSlider                      
                      range={range}                    // set the current slider's value
                      thumbStyle={{
                        width:20,
                        height:20,
                        borderRadius:50,
                        backgroundColor:theme.colors.primary

                      }}                      
                      minimumValue={18}
                      outboundColor='grey'           // The track color outside the current range value
                      inboundColor={theme.colors.primary}   
                      maximumValue={80}                      
                      onValueChange={setRange}
                      
                      
                    
                    />
                    </Box>
              </Box>

              <Box width={'100%'} flexDirection='column' paddingHorizontal='s2' marginBottom='s24'>
                <SharedHeader 
                  title={`Distance`}
                  subtitle='Filter people by distance'
                   />
                    <Box 
                      backgroundColor='textInputBg' 
                      borderRadius={20}
                      padding='s20'
                >
                    <Text variant='regular16' color='white' marginBottom='s20'>
                        {`Up ${Math.round(miles)} miles away` }
                        </Text>
                   
                    <Slider                      

                      progress={useSharedValue(0)}
                      minimumValue={useSharedValue(0)}
                      maximumValue={useSharedValue(100)}
                      onValueChange={value=>setMiles(value)}
                      bubbleContainerStyle={{
                        display:"none"
                      }}
                    />
                    </Box>
              </Box>

              <Box width={'100%'} flexDirection='column' paddingHorizontal='s2' marginBottom='s24'>
                <SharedHeader 
                  title={`Tour Mode`}
                  subtitle='Use Tour Mode to change your location to where ever you are travelling to'
                   />
                    <Box 
                      backgroundColor='textInputBg' 
                      borderRadius={20}
                      padding='s20'
                >
                    <Text variant='regular16' color='white' marginBottom='s24'>
                       {`Currently in ${faker.location.city()+', '+faker.location.state({abbreviated:true})} `}
                        </Text>
                   
                    <CommonSolidButton                      
                      onPress={()=>{}}
                      title='Change Location'
                    />
                    </Box>
              </Box>
              </ScrollView>

         
       </Box>
    </>
  )
}



const styles = StyleSheet.create({})