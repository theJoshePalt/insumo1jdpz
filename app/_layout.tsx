import { Stack } from "expo-router";
import "@/global.css"
export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen 
        name="LoginScreen" 
        options={{ 
          title: "Bonjour LOG IN" ,
          headerStyle: {
            backgroundColor: "#F54927",//color del fondo del encabezado.
          },
          headerTintColor: "#fff",//color de las letras
          headerTitleStyle: {
            fontWeight: "bold",//tipo de letra del encabezado
          },
          headerBackVisible: false,
        }}
      />
      <Stack.Screen 
        name="RegisterScreen" 
        options={{ 
          title: "REGISTER",
          headerStyle: {
            backgroundColor: "#F54927",//color del fondo del encabezado.
          },
          headerTintColor: "#fff",//color de las letras
          headerTitleStyle: {
            fontWeight: "bold",//tipo de letra del encabezado
          },
          headerBackVisible: false,
        }}
      />
    </Stack>
  );
}
