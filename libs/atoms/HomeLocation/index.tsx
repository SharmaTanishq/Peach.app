
import React from 'react'
import Box from '../box'
import { LocationIcon } from '@Icons'
import Text from '../text'

type Props = {
  location?:string
}

const index = (props: Props) => {
  return (
    <Box flexDirection="row" justifyContent="center"  alignItems="center"  flex={1/2}  >
                    <LocationIcon size={20} />      
                    {props.location?
                      <Text color="white" variant="semiBold12" style={{
                      paddingLeft:5
                      }}>{props.location}</Text>
                      :
                      <></>}            
                    
                  
                </Box>
  )
}

export default index