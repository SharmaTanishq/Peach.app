import { StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import Box from '../box'
import Text from '../text'
import { router, useNavigation } from 'expo-router'

type Props = {
    id?:string,
    redirect:string,
    name:string,
    icon?:React.ReactNode

}

const index = (props: Props) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={()=>router.push({ pathname: `/${props.redirect}` })}>
    <Box flexDirection='row'  flex={1} padding='s10' marginBottom='s14' justifyContent='space-between' alignItems='center'>       
      <Text variant='semiBold18' color='white'>{props.name}</Text>
        {props.icon}
    </Box>
    </TouchableOpacity>
  )
}

export default index

const styles = StyleSheet.create({})