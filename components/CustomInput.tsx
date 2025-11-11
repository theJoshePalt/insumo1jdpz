import React from "react";
import { View, TextInput, Text } from "react-native";


interface CustomInputProps {
  label?: string;//titulo
  placeholder: string;//texto de guia
  value: string;//valor actual del input
  onChangeText: (text: string) => void;//evento
  secureTextEntry?: boolean; // para contraseñas
  error?: string; // texto de error de validación
}

export default function CustomInput({
    label, placeholder, value, onChangeText, secureTextEntry = false, error, 
    }: CustomInputProps) 
    {

  return (
    <View className="w-full mb-4">
      {label && (
        <Text className="text-gray-700 font-semibold mb-1">{label}</Text>
      )}


      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        className={`border rounded-xl px-4 py-3 bg-gray-800 text-white border-[#F54927] ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />

      {/* se pondra rojito si hay un error*/}
      {error && <Text className="text-red-500 mt-1 text-sm">{error}</Text>}
    </View>
  );
}
