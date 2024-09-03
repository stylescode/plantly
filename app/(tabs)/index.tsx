import { PlantCard } from "@/components/PlantCard";
import { PlantlyButton } from "@/components/PlantlyButton";
import { usePlantStore } from "@/store/plantsStore";
import { theme } from "@/theme";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, View } from "react-native";

export default function App() {
  const plants = usePlantStore((state) => state.plants);
  console.log(plants);
  const router = useRouter();
  const handlePress = () => {
    router.navigate("/newPlant");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        style={styles.list}
        contentContainerStyle={{
          padding: 10,
        }}
        data={plants}
        renderItem={({ item }) => {
          return <PlantCard plant={item} />;
        }}
        ListEmptyComponent={() => {
          return (
            <PlantlyButton
              title="Add your first plant!"
              onPress={handlePress}
            />
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.lightGrey,
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    width: "100%",
  },
});
