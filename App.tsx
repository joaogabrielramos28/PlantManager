import React from "react";
import { Welcome } from "./src/screens/Welcome";

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from "@expo-google-fonts/jost";
import { ActivityIndicator } from "react-native";
import { UserIdentification } from "./src/screens/UserIdentification";
import { Confirmation } from "./src/screens/Confirmation";

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });
  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return <Confirmation />;
}
