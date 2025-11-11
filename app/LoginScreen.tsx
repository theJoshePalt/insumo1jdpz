import { Text, View, TouchableOpacity, Alert,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform, } from "react-native";
import React ,{ useState }from "react";
import { router } from "expo-router";
import CustomInput from "../components/CustomInput";
import { LoginSchema } from "../lib/schemas/LoginSchema";

export default function LoginScreen() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleLogin = () => {
    const result = LoginSchema.safeParse({ email, password });

    if (!result.success) {
  
      const formErrors: any = {};// Si hay errores
      result.error.errors.forEach((err) => {
        const field = err.path[0];
        formErrors[field] = err.message;// se muesta en los CustomInput
      });
      setErrors(formErrors);
      return;
    }

    setErrors({});
    Alert.alert("Login exitoso", `Bienvenido ${email}`);
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-gray-100"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="w-full p-6">
            <Text className="text-3xl font-bold text-gray-800 mb-8 text-center">LOG IN</Text>

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

            <TouchableOpacity
              onPress={handleLogin}
              className="bg-[#F54927] px-6 py-3 rounded-2xl mt-3"
            >
              <Text className="text-white font-semibold text-lg text-center">Iniciar sesión</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push("/RegisterScreen")}>
              <Text className="text-[#F54927] mt-4 text-center">
                No Account? Register.
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
