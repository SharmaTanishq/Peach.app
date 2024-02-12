import FontAwesome from '@expo/vector-icons/FontAwesome';
import 'react-native-gesture-handler'


import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { LogBox, useColorScheme } from 'react-native';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from '@theme';
import { AppProvider } from 'context/context';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'onBoarding/index',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    "Metropolis-Black": require("../assets/fonts/Metropolis-Black.otf"),
    "Metropolis-Bold": require("../assets/fonts/Metropolis-Bold.otf"),
    "Metropolis-SemiBold": require("../assets/fonts/Metropolis-SemiBold.otf"),
    "Metropolis-Regular": require("../assets/fonts/Metropolis-Regular.otf"),
    "Metropolis-Medium": require("../assets/fonts/Metropolis-Medium.otf"),
    "Metropolis-Light": require("../assets/fonts/Metropolis-Light.otf"),
    "Metropolis-ExtraLight": require("../assets/fonts/Metropolis-ExtraLight.otf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  
  return (
    <ThemeProvider theme={theme}>
      <AppProvider >
      
        <Stack>
          <Stack.Screen name ="onBoarding/index" options={{ headerShown: false }}  />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
          <Stack.Screen name="screens" options={{  headerShown: false }} />
        </Stack>
        
      
          
      
      
      </AppProvider>
    </ThemeProvider>
  );
}
