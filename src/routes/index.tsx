import { NavigationContainer, StackRouter } from "@react-navigation/native";
import React from "react";
import { AppRoutes } from "./stack.routes";

const Routes = () => {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
};

export { Routes };
