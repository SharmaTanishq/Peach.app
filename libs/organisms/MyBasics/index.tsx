import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { MyBasicLabelItem } from '@atoms'
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';


type Props = {}

const basicLabelData=[
    {
        id:1,
        label:"Work",
        labelAnswer:"None",
        labelIcon:<MaterialIcons name="laptop-mac" size={20} color="white" />,
    },
    {
        id:2,
        label:"Education",
        labelAnswer:"None",
        labelIcon:<SimpleLineIcons name="graduation" size={20} color="white" />,
    },
    {
        id:3,
        label:"Location",
        labelAnswer:"None",
        labelIcon:<EvilIcons name="location" size={20} color="white" />,
    }
]

const index = (props: Props) => {

  return (
    <View>
        {basicLabelData.map(item=>
            <TouchableOpacity onPress={()=>console.log('item',item.label)} key={item.id}>
                <MyBasicLabelItem text={item.label} icon={item.labelIcon} />
            </TouchableOpacity>
        )}
        
    </View>
  )
}

export default index