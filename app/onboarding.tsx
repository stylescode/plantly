import { View, Text, StyleSheet, Button } from "react-native";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "expo-router";

export default function OnboardingScreen() {
  const router = useRouter();
  const toggleOnboarding = useUserStore((state) => state.toggleOnboarding);
  const handlePress = () => {
    toggleOnboarding();
    router.replace("/");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Onboarding</Text>
      <Button title="let me in" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
  },
});
