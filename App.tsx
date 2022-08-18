import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ClerkProvider, ClerkLoaded, useUser } from "@clerk/clerk-expo";
import { tokenCache } from "./cache";
import Navigation from './src/navigation'

const CLERK_FRONT_END_API_KEY = "clerk.simple.sheepdog-97.lcl.dev";

export default function App() {

  return (
    <ClerkProvider frontendApi={CLERK_FRONT_END_API_KEY} tokenCache={tokenCache}>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
