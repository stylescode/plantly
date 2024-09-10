import { theme } from "@/theme";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerRight: () => {
            return (
              <Link href="/newPlant" asChild>
                <Pressable
                  style={{
                    marginRight: 4,
                  }}
                  hitSlop={20}
                >
                  <AntDesign
                    name="pluscircleo"
                    size={24}
                    color={theme.colors.green}
                  />
                </Pressable>
              </Link>
            );
          },
        }}
      />
      <Stack.Screen
        name="plants/[plantID]"
        options={{
          title: "Plant Details",
        }}
      />
    </Stack>
  );
}
