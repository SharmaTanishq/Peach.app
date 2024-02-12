import { StyleSheet} from 'react-native'
import React from 'react'
import { Chat } from '@organisms'
import { theme } from '@theme'


import { GradientLayout } from 'components/GradientLayout'



type Props = {}

export default function ChatScreen() {
  return (
    
    <GradientLayout >
          <Chat/>
    </GradientLayout> 
    
    
  );
}

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
  
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },
});