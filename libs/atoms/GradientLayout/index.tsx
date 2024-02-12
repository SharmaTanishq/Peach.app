import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { theme } from '@theme'

type Props = {
    children?:React.ReactNode
}

const Gradient = ({children}: Props) => {
  return (
    <View style={styles.container}>
        {children}
    </View>
  )
}

export default Gradient

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
})