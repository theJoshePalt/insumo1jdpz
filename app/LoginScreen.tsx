import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";

export default function LoginScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-6">
      <Text className="text-3xl font-bold text-gray-800 mb-8">LOG IN</Text>

      <TouchableOpacity onPress={() => router.push("/RegisterScreen")}>
        <Text className="text-[#F54927] mt-4">No Account? Register. </Text>
      </TouchableOpacity>
    </View>
  );
}
