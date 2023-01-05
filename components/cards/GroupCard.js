import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const GroupCard = () => {
  return (
    <TouchableOpacity className="bg-slate-500 w-full h-14 flex-row border-2 border-slate-700 rounded-md shadow-sm">
      <View className="flex-row grid grid-cols-2 gap-4"> 
      <View className="flex justify-center pl-4">
      <Image
      source={require("../../assets/google-pay.png")} 
      />
      </View>
      <View className="flex-col justify-center">
        <Text className="subpixel-antialiased font-semibold">Kudhremukh Trip Split</Text>
        <View className="flex-row">
        <Text className="text-xs antialiased">Status</Text> 
        <Text className="text-xs antialiased italic font-medium"> · Resolved</Text>
        </View>
      </View>
      </View>
    </TouchableOpacity>
  );
}

export default GroupCard;