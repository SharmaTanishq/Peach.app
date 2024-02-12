import { StyleSheet,  View } from 'react-native'
import Text from '../text'
import React from 'react'

type Props = {
    title?:string,
    subtitle?:string,
}

const index = (props: Props) => {
  return (
    <>
      <Text color='white' variant='semiBold18' marginBottom='s18'>{props.title?props.title:""}</Text>
      <Text variant='light16' color='white' marginBottom='s18'>{props.subtitle?props.subtitle:""}</Text>
    </>
  )
}

export default index

const styles = StyleSheet.create({})