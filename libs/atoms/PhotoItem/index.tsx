import { StyleSheet, View } from 'react-native'
import React from 'react'
import { ImageIcon } from '@Icons'
import { theme } from '@theme'
import Box from '../box'
import { MaterialIcons } from '@expo/vector-icons';

type Props = {
    key:any;
}



const index = (item: { name: string; key: string }) => {
  return (
  //   <View style={styles.item} key={item.key}>
  //     <ImageIcon size={28} color={theme.colors.textInputLightBG}/>
  //     <Box
  //       width={30}
  //       height={30} 
  //       backgroundColor='primary'
  //       justifyContent='center'
  //       alignItems='center'
  //       alignSelf='flex-end'
        
  //       borderRadius={50}
  //       >
  //       <MaterialIcons name="add" size={24} color="white" />
  //     </Box>
  //   {/* {image && <Image source={{ uri: image }} style={{ width: 110, height: 110,borderRadius:18 }} />} */}
  // </View>
               <Box
                  height={110}
                  width={110}
                  backgroundColor='textInputBg'
                  borderRadius={18}
                  style={{
                    alignItems: "center",
                    justifyContent:'center',
                   
                    
                  }}
                >
                  <Box
                    style={{
                      backgroundColor: theme.colors.primary,
                      borderRadius: 30 / 2,
                      width: 30,
                      height: 30,
                      justifyContent: "center",
                      bottom:0,
                      position:'absolute',
                      alignItems: "center",
                      alignSelf:"flex-end"
                    }}
                  >
                     <MaterialIcons name="add" size={24} color="white" />
                  </Box>
                    <ImageIcon size={28} color={theme.colors.textInputLightBG}/>
                  {/* <Image
                    source={{ uri: item.item.imageUrl }}
                    style={{
                      width: "75%",
                      height: "75%",
                      borderRadius: 120 / 2,
                    }}
                  ></Image> */}
                 
                </Box>
  )
}

export default index

const styles = StyleSheet.create({
    item: {
        width: 110,
        height: 110,
        borderRadius: 18,    
        backgroundColor: theme.colors.textInputBg,
        justifyContent: "flex-end",
        alignItems: "center",
        
      }
})