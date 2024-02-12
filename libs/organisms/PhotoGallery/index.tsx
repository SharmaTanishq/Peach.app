import { StyleSheet,  View } from 'react-native'
import * as React from 'react'
import DraggableGrid from "react-native-draggable-grid";
import { Box, PhotoItem, Text } from '@atoms';



type Props = {
    data?:any[];
}


const dummyData = [
    { name: "1", key: "one" },
    { name: "2", key: "two" },
    { name: "3", key: "three" },
    { name: "4", key: "four" },
    { name: "5", key: "five" },
    { name: "6", key: "six" },
  ];

const index = (props: Props) => {
    const [temp, setTemp] = React.useState(dummyData);

  return (
    <Box  >
     
      <DraggableGrid
                numColumns={3}
                data={temp}                
                onItemPress={(item)=>{console.log(item.name)}}
                renderItem={PhotoItem}
                onDragRelease={(data) => {
                    setTemp(data); // need reset the props data sort after drag release
                }}
            />
        <Box alignItems='center'>
            <Text  marginTop='s10' color='white'> Hold & drag to reorder</Text>
        </Box>
    </Box>
  )
}

export default index

const styles = StyleSheet.create({})