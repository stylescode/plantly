import { View, Text, StyleSheet } from "react-native";
import { PlantType } from "@/store/plantsStore";
import { PlantlyImage } from "./PlantlyImage";
import { theme } from "@/theme";

export function PlantCard({ plant }: { plant: PlantType }) {
  return (
    <View style={styles.card}>
      <PlantlyImage size={100} />
      <View style={styles.description}>
        <Text style={styles.name}>{plant.name}</Text>
        <Text style={styles.frequency}>
          Water every {plant.wateringFrequencyDays} days
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    borderRadius: 8,
    backgroundColor: theme.colors.white,
    marginBottom: 10,
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1,
    paddingHorizontal: 12,
    paddingVertical: 6,
    elevation: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  frequency: {
    color: "gray",
  },
  description: {
    flex: 1,
    gap: 4,
  },
});
