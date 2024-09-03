import { Tabs, Redirect, Link } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Pressable } from "react-native";

export default function Layout() {
  const hasFinishedOnboarding = useUserStore(
    (state) => state.hasFinishedOnboarding,
  );

  if (!hasFinishedOnboarding) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.green,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="leaf" color={color} size={size} />
          ),
          tabBarShowLabel: false,
          headerRight: () => {
            return (
              <Link href="/newPlant" asChild>
                <Pressable
                  style={{
                    marginRight: 20,
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
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" color={color} size={size} />
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tabs>
  );
}
