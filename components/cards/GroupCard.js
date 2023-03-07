import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'


const GroupCard = (props) => {
  return (
    <TouchableOpacity className="flex justify-center items-center bg-stone-700 w-full h-24 flex-row shadow-sm border-2 rounded-lg border-red-600">
      <View className="flex-row grid grid-cols-3 gap-4 p-1 items-center"> 
      <View className="flex justify-center items-center basis-1/6">
      <Image
      source={require("../comp_assets/circle-with-rhombs-pattern.png")} 
      />
      </View>
      <View className="flex-col justify-center item-start basis-3/6">
        <Text className="text-red-400 subpixel-antialiased leading-none text-lg font-semibold"  key={props.id}>{props.name}</Text>
        <Text className="text-red-400 text-xs subpixel-antialiased italic leading-none"  key={props.id}>{props.work}</Text> 
        <View className="flex-row">
        <TouchableOpacity className="w-20 flex-row justify-around items-center bg-red-600 rounded-lg m-0.5">
        <Image source={require('../comp_assets/plus(1).png')} className="m-0.5"/>
        <Text className="text-base leading-none m-0.5 text-white subpixel-antialiased">Follow</Text> 
        </TouchableOpacity>
        <TouchableOpacity className="w-20 flex-row justify-centre items-center bg-red-600 rounded-lg m-0.5">
        <Image source={require('../comp_assets/greater-than(3).png')} className="ml-2"/>
        <Text className="text-sm subpixel-antialiased font-medium text-white">Logs</Text>
        </TouchableOpacity>
        </View>
      </View>
      <View className="flex basis-1/6 justify-center items-center">
      <TouchableOpacity className="h-16 w-16 flex justify-center bg-red-600 rounded-lg items-center">
        <Text className="text-2xl text-white subpixel-antialiased"  key={props.id}>{props.followCount}</Text>
        <Text className="text-xs text-white subpixel-antialiased">Followers</Text>
      </TouchableOpacity>
      </View>
      </View>
    </TouchableOpacity>
  );
}

export default GroupCard;