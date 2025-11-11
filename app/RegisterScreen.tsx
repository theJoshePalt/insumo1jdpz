import React ,{ useState }from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { router} from "expo-router";
import CustomInput from "../components/CustomInput";

export default function RegisterScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");


    return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-6">
      <Text className="text-3xl font-bold text-gray-800 mb-8">REGISTER</Text>


      <CustomInput
        label="Name"
        placeholder="Name"
        value={name}
        onChangeText={setName}
        />

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

        <CustomInput
        label="Confirm Pasword"
        placeholder="Confirm"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        />

      <TouchableOpacity onPress={() => {router.push('/LoginScreen');}}>
        <Text className="text-[#F54927] mt-4">Yes Acount? Log in.</Text>
      </TouchableOpacity>
    </View>
  );
}
