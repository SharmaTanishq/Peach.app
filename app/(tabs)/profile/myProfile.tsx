import { StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";

import { Box, CommonSolidButton, ProfileListItem, Text } from "@atoms";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { screenWidth } from "@constant/utils";
import { getRandomPerson } from "libs/utils/Faker/getRandomAvatar";
import { theme } from "@theme";
import { EvilIcons, Feather } from "@expo/vector-icons";
import { Bookmark, Settings, Ticket } from "@Icons";
import { Stack, router } from "expo-router";

type Props = {}

    const MyProfileTabs = [
        {
        id: "preferences",
        name: "Matching Preferences",
        redirect: 'screens/matchingPreferences',
        icon:<Settings color={theme.colors.white} size={24} />
        },
        {
        id: "myEvents",
        name: "My Events",
        redirect: 'screens/myEvents',
        icon:<Ticket color={theme.colors.white} size={24} />
        },
        {
        id: "savedSongs",
        name: "Saved Songs",
        redirect: 'screens/savedSongs',
        icon:<Bookmark color={theme.colors.white} size={24} />
        },
    ];

  export default function MyProfile(props: Props){
    const user = getRandomPerson();
    const insets = useSafeAreaInsets();
  return (
    <>
     <Stack.Screen options={{
            headerTitle:'',
            headerRight: () => (
              <Box
                paddingHorizontal="s20"
                height={"100%"}
                justifyContent="flex-end"
              >
                <TouchableOpacity>
                  <Feather name="settings" size={24} color={"white"} />
                </TouchableOpacity>
              </Box>
            ),
            headerStyle: {
              backgroundColor: theme.colors.background,
            
            }
        }}/>
    
    <Box flex={1} backgroundColor="background">
       
    <Box
      flex={1}
      paddingHorizontal="s18"
      paddingTop="s12"
      style={{
        paddingBottom: insets.bottom,
        width: screenWidth,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Box
        flex={1 / 2}
        justifyContent="space-evenly"
        alignItems="center"
        width={"100%"}
        paddingHorizontal="s24"
        maxHeight={500}
      >
        {/* Profile Picture */}
        <Image
          source={{ uri: user.userImage }}
          width={screenWidth / 2.7}
          height={screenWidth / 2.7}
          style={{
            borderRadius: screenWidth,
            borderWidth: 6,
            borderColor: theme.colors.primary,
          }}
        />
        <Box alignItems="center">
          {/* User Name */}
          <Text variant="semiBold24" marginBottom="s8" color="white">
            {user.userName}
          </Text>

          {/* User Location */}
          <Box flexDirection="row" justifyContent="center">
            <EvilIcons name="location" size={20} color="white" />
            <Text variant="regular16" color="white">
              {user.userLocation}
            </Text>
          </Box>
        </Box>
        {/* Edit Profile Redirect */}
        <CommonSolidButton title="Edit Profile" onPress={() => router.push('/screens/editProfile')} />
        
      
        
      </Box>
      {/* Setting Options Map */}
      <Box flex={1/2} width={'100%'} >
        <FlatList
          data={MyProfileTabs}
          contentContainerStyle={{paddingTop:insets.top-20}}
          renderItem={(item)=>
          <Box flex={1}>
            <ProfileListItem 
              name={item.item.name} 
              redirect={item.item.redirect}
              icon={item.item.icon}/>
          </Box>}
        />
      </Box>
    </Box>
  </Box>
  </>
  )
}



const styles = StyleSheet.create({})