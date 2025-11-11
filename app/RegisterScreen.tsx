import React ,{ useState }from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { router} from "expo-router";
import CustomInput from "../components/CustomInput";
import { RegisterSchema } from "@/lib/schemas/RegisterSchema";



export default function RegisterScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState<{
        name?: string;
        email?: string;
        password?: string;
        confirmPassword?: string;
      }>({});;

      const handleRegister = () => {
        const result = RegisterSchema.safeParse({
          name,
          email,
          password,
          confirmPassword,
        });
    
        if (!result.success) {
          const formErrors: any = {};
          result.error.errors.forEach((err) => {
            const field = err.path[0];
            formErrors[field] = err.message;
          });
          setErrors(formErrors);
          return;
        }
    
        setErrors({});
        Alert.alert("Registro exitoso", `Bienvenido ${name}`);
      };


    return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-6">
      <Text className="text-3xl font-bold text-gray-800 mb-8">REGISTER</Text>


      <CustomInput
        label="Name"
        placeholder="Name"
        value={name}
        onChangeText={setName}
        error={errors.name}
        />

      <CustomInput
        label="Correo"
        placeholder="ejemplo@gmail.com"
        value={email}
        onChangeText={setEmail}
        error={errors.email}
        />


        <CustomInput
        label="Contraseña"
        placeholder="Ingresa tu contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        error={errors.password}
        />

        <CustomInput
        label="Confirm Pasword"
        placeholder="Confirm"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        error={errors.confirmPassword}
        />

      <TouchableOpacity onPress={handleRegister}
        className="bg-[#F54927] px-6 py-3 rounded-2xl mt-3"
      >
        <Text className="text-white font-semibold text-lg">Registrarse</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {router.push('/LoginScreen');}}>
        <Text className="text-[#F54927] mt-4">Yes Acount? Log in.</Text>
      </TouchableOpacity>
    </View>
  );
}
