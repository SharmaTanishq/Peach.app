import { DimensionValue, StyleSheet, } from 'react-native'
import React from 'react'
import Box from '../box'
import { theme } from '@theme'

type Props = {
    height:DimensionValue,
    width:DimensionValue,
    color?:boolean,
    children:React.ReactNode
}

const index = (props: Props) => {
  return (
    <Box
              width={props.height}
              height={props.width}
              backgroundColor={props.color?"primary":"background"}
              borderRadius={100}
              justifyContent="center"
              alignItems="center"
            >
             {props.children}
            </Box>
  )
}

export default index

const styles = StyleSheet.create({})