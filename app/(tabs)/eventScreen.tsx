import { StyleSheet } from 'react-native';

import { theme } from '@theme';

import { Box, CircleBackground, CommonSolidButton, Text } from '@atoms';

import { GradientLayout } from 'components/GradientLayout';
import { Ticket } from '@Icons';
import { faker } from '@faker-js/faker';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { screenWidth } from '@constant/utils';



export default function TabTwoScreen() {
  const city = faker.location.city();
  const insets = useSafeAreaInsets();
  return (
    
    <GradientLayout>

      <Box
        flex={1}
        paddingHorizontal="paddingHorizontal"
        
      >

         <Box
          flex={1}
          style={{ paddingTop: insets.top, paddingBottom: insets.bottom,width: screenWidth, }} 
          >
             <Box
             mt="s48" 
             paddingHorizontal="paddingHorizontal" 
             flex={1}
             alignItems='center'             
             >
                <Box flexDirection='row' alignItems='center' justifyContent='center' marginBottom='s20'>
                  <Text variant="bold36">🍑 </Text>
                  <Text variant="light36" letterSpacing={1.5}>Peach</Text>
                </Box>
                <CircleBackground 
                  width={150}
                  height={150}
                >
                  <Ticket size={80} color={theme.colors.primary}/>
                  
                </CircleBackground>
                <Text variant='semiBold24' color='white' marginTop='s28'>You are in line</Text>
                <Text
                  marginTop='s20'
                  variant='light16' 
                  color='white'
                  textAlign='center'
                  lineHeight={22.5}
                  >
                  {faker.person.firstName()}, help use spread the word in {city}! invite a friend so that we can launch in {city} next.
                </Text>
                <Box width={'90%'}>
                <CommonSolidButton
                  style={{
                    backgroundColor:theme.colors.textInputBg,
                    borderRadius:8,
                    marginTop:30
                  }}
                  onPress={()=>{}}
                  title='Now available in'
                />
                <CommonSolidButton
                  style={{
                    marginTop:30
                  }}
                  onPress={()=>{}}
                  title='Invite Friends'
                />
              </Box>
            </Box>
          </Box>
        </Box>
    </GradientLayout> 
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height:'100%',
    
  },
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },
});
