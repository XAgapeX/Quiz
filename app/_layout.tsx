import { Nunito_400Regular } from "@expo-google-fonts/nunito";
import { Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";
import { Drawer } from "expo-router/drawer";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CustomDrawerContent from "../components/CustomDrawerContent";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Nunito_400Regular,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerStyle: { backgroundColor: "#ffffff" },
          headerTitleStyle: {
            fontFamily: "Poppins_600SemiBold",
            color: "#adc6a4",
          },
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="index"
          options={{ title: "Home Page" }}
        />
        <Drawer.Screen
          name="results"
          options={{ title: "Results" }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
