import React from 'react';

import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '@theme';

type Props={
    children:React.ReactNode;
}

export function GradientLayout({children}: Props) {
  return (
    <View style={styles.container}>
      <LinearGradient 
          style={styles.background}
          start={{x:-0.1,y:-1}}
          end={{x:0.3,y:0.9}}
          locations={[0,0.12,0.61,0.95]}
          colors={[theme.colors.primary,theme.colors.primaryGradient,'black',theme.colors.background]}
        />
        
        {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: theme.colors.background,
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
