import { Drawer } from 'expo-router/drawer';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CustomDrawerContent from '../components/CustomDrawerContent';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerStyle: { backgroundColor: '#ffffff' },
          headerTitleStyle: { fontWeight: 'bold' },
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="index" options={{ title: 'Home Page' }} />
        <Drawer.Screen name="test1" options={{ title: 'Test #1' }} />
        <Drawer.Screen name="test2" options={{ title: 'Test #2' }} />
        <Drawer.Screen name="test3" options={{ title: 'Test #3' }} />
        <Drawer.Screen name="results" options={{ title: 'Results' }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}
