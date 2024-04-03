import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { theme } from '@theme'
import { LinearGradient } from 'expo-linear-gradient'

type Props = {
    children?:React.ReactNode
}

const ImageGradient = ({children}: Props) => {
  return (
    
      <LinearGradient 
                style={styles.background}
                start={{x:0.9,y:-0.3}}
                end={{x:1.1,y:0.85}}
                locations={[0.1,0.6,1]}
                colors={[theme.colors.black,'transparent',theme.colors.imageBottomGradient]}
              />
        
        
    
  )
}

export default ImageGradient

const styles = StyleSheet.create({
    container: {
        
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: theme.colors.background,
      },
      background: {
        position: 'absolute',
        zIndex:1,
        left: 0,
        right: 0,
        top: 0,
        height:'100%',        
      },
})