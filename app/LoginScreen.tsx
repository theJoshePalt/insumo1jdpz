import { Text, View, TouchableOpacity } from "react-native";
import React ,{ useState }from "react";
import { router } from "expo-router";
import CustomInput from "../components/CustomInput.tsx";


export default function LoginScreen() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-6">
      <Text className="text-3xl font-bold text-gray-800 mb-8">LOG IN</Text>

      <CustomInput
        label="Correo"
        placeholder="ejemplo@gmail.com"
        value={email}
        onChangeText={setEmail}
      />
      <CustomInput
        label="Contraseña"
        placeholder="Ingresa tu contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity onPress={() => router.push("/RegisterScreen")}>
        <Text className="text-[#F54927] mt-4">No Account? Register. </Text>
      </TouchableOpacity>
    </View>
  );
}
