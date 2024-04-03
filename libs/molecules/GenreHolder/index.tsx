import { View, Text } from 'react-native'
import React from 'react'
import { Box, Genre } from '@atoms'

interface genre{
    value?:string
}

type Props = {
    data:genre[];
}

const index = (props: Props) => {
  
  return (
    <Box flexDirection="row"  paddingVertical='s18' >
        {props.data?<>
          {props.data.map(item=><Genre key={item.value} value={item.value} />)}      
        </>:<></>}
        
    </Box>
  )
}

export default index