import { Stack } from "expo-router";
import { useEffect } from "react";
import * as QuickActions from "expo-quick-actions";
import { Platform } from "react-native";
import { useQuickActionRouting } from "expo-quick-actions/router";

export default function Layout() {
  useQuickActionRouting();

  useEffect(() => {
    QuickActions.setItems([
      {
        title: "Add plant",
        icon: Platform.OS === "ios" ? "symbol:leaf" : "leaf",
        id: "0",
        params: {
          href: "/newPlant",
        },
      },
    ]);
  }, []);

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          animation: "fade",
        }}
      />
      <Stack.Screen
        name="onboarding"
        options={{
          headerShown: false,
          animation: "fade",
        }}
      />
      <Stack.Screen
        name="newPlant"
        options={{
          presentation: "modal",
          title: "New Plant",
        }}
      />
    </Stack>
  );
}
