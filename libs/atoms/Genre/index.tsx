import { StyleSheet,  View } from 'react-native'
import React from 'react'
import Text from '../text'
import { BlurView } from 'expo-blur'

type Props = {
    value?:string
}

const index = (props: Props) => {
  return (
    <>
       <BlurView intensity={30} style={styles.blurContainer} >
                    <Text color="white" > {props.value} </Text>
        </BlurView>
    </>
  )
}

export default index

const styles = StyleSheet.create({
    blurContainer:{
        overflow:'hidden',
        padding:10,
        borderRadius:50,
        marginRight:10
      }
})