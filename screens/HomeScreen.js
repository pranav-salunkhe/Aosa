import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import GroupCard from '../components/cards/GroupCard';

const HomeScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
  return (
    <View>
        <View className="bg-slate-900 w-full h-24">
          <View className="inset-y-16 pl-3 pr-3 flex-row justify-between">
          <TouchableOpacity>
            <Image
              className=""
              source={require("../assets/menu.png")}
            />
          </TouchableOpacity>
          <Text className="text-white">AOSA</Text>
          <TouchableOpacity>
            <Image
              className=""
              source={require("../assets/more.png")}
            />
          </TouchableOpacity>
          </View>
        </View>
        <ScrollView className="bg-slate-800 w-full h-full">
            {/* Card of Money Splitting Group */}
            <View className="flex flex-col pt-2 px-2 space-y-2">
            <View>
            <GroupCard />
            </View>
            <View>
            <GroupCard />
            </View>
            <View>
            <GroupCard />
            </View>
            <View>
            <GroupCard />
            </View>
            <View>
            <GroupCard />
            </View>
            <View>
            <GroupCard />
            </View>
            <View>
            <GroupCard />
            </View>
            <View>
            <GroupCard />
            </View>
            </View>
        </ScrollView>
    </View>
  );
}

export default HomeScreen;