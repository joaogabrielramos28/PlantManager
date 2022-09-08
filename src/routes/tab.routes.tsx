import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { PlantSelect } from "../screens/PlantSelect";
import { colors } from "../styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { MyPlants } from "../screens/MyPlants";

const { Navigator, Screen } = createBottomTabNavigator();

const AuthRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.green,
        tabBarInactiveTintColor: colors.heading,
        tabBarLabelPosition: "below-icon",
        tabBarStyle: {
          paddingVertical: 20,
          height: 88,
        },
      }}
    >
      <Screen
        name="Nova Planta"
        component={PlantSelect}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="add-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Screen
        name="Minhas Plantas"
        component={MyPlants}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default AuthRoutes;
