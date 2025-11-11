import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { router} from "expo-router";
import CustomInput from "../components/CustomInput.tsx";

export default function RegisterScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-6">
      <Text className="text-3xl font-bold text-gray-800 mb-8">REGISTER</Text>

      <TouchableOpacity onPress={() => {router.push('/LoginScreen');}}>
        <Text className="text-[#F54927] mt-4">Yes Acount? Log in.</Text>
      </TouchableOpacity>
    </View>
  );
}
