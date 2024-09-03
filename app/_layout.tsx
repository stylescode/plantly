import { Stack } from "expo-router";

export default function Layout() {
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
          title: "New plant",
        }}
      />
    </Stack>
  );
}
