import { View, Text, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import GroupCard from '../components/cards/GroupCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { details } from '../components/test_data/test_prof.js';

function createRedBoard(details){
  return(
    <View>
    <GroupCard
      key = {details.id}
      name = {details.name}
      work = {details.work}
      followCount = {details.followCount}
    >
    </GroupCard>
    </View>
  )
}


const HomeScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
  return (
    <SafeAreaView>
    <StatusBar 
      backgroundColor="#dc2626"
      barStyle={'dark-content'}
      />
    <View className="bg-stone-900 h-12 flex-row justify-between items-center">
    <TouchableOpacity>
      <Image source={require('../assets/menu-bar.png')}/>
    </TouchableOpacity>
    <TouchableOpacity>
    <Text className="text-red-600 text-lg font-mono font-extrabold subpixel-antialiased">AOSA</Text>
    </TouchableOpacity>
    <TouchableOpacity>
    <Image source={require('../assets/new-moon.png')}/>
    </TouchableOpacity>
    </View>
    <View className="w-full h-0.5 bg-red-600"></View>
    <ScrollView className="h-full pt-4 flex flex-col space-y-4 px-2.5 bg-stone-900">
     {details.map(createRedBoard)}
    </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;