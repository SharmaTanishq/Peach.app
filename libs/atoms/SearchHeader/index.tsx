import { 
    
    StyleSheet,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import Box from '../box'
import { useNavigation } from 'expo-router';


import Text from '../text';
import { Feather } from '@expo/vector-icons';
import { theme } from '@theme';


type Props = {
    hideBackButton?: boolean;
    onPressBack?: any;
}

const index:React.FC<Props> = ({
    hideBackButton = true,
    onPressBack,
  }) => {
    const navigation = useNavigation();
  return (
    <Box paddingHorizontal="paddingHorizontal" marginBottom='s10' backgroundColor="background">
    <Box
      alignItems="center"
      flexDirection="row"
      justifyContent="space-between"
    >

      <Box 
        backgroundColor='textInputBg' 
        flex={1} 
        flexDirection='row'
        padding='s10'
        paddingHorizontal='s18'
        alignItems='center'
        marginRight='s16'
        borderRadius={10}
        >
        <Feather name="search" size={20} color="white" />
        <TextInput 
            style={{
                marginLeft:10,
                fontSize:theme.textVariants.bold16.fontSize,
                fontWeight:'700',
                color:'white'
            }}
            autoFocus={true}
            >
            
        </TextInput>
      </Box>

      {hideBackButton === true ? (
        <>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{  borderRadius: 50 }}
          >
           <Text variant='regular18' color='white'>Done</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Box></Box>
      )}

      
    </Box>
  </Box>
  )
}

export default index

const styles = StyleSheet.create({})