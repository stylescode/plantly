import { PlantlyButton } from "@/components/PlantlyButton";
import { PlantlyImage } from "@/components/PlantlyImage";
import { theme } from "@/theme";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { usePlantStore } from "@/store/plantsStore";
import { differenceInCalendarDays, format } from "date-fns";

const dateFormat = "LLL d yyyy, h:mm aaa";

export default function PlantScreen() {
  const params = useLocalSearchParams();
  const navigation = useNavigation();
  const router = useRouter();
  const plant = usePlantStore((state) =>
    state.plants.find((plant) => plant.id === params.plantID),
  );
  const waterPlant = usePlantStore((state) => state.waterPlant);
  const removePlant = usePlantStore((state) => state.removePlant);

  useEffect(() => {
    navigation.setOptions({
      title: `${plant?.name}`,
    });
  }, [plant?.name, navigation]);

  const handleWater = () => {
    if (plant) {
      waterPlant(plant.id);
    }
  };

  const handleDeletePlant = () => {
    if (!plant) {
      return;
    }

    Alert.alert(
      "Delete plant",
      `Are you sure you want to delete ${plant.name}?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            removePlant(plant.id);
            router.navigate("/");
          },
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <PlantlyImage imageURI={plant?.imageURI} />
      <Text style={styles.category}>Water me every</Text>
      <Text style={styles.details}>{plant?.wateringFrequencyDays} days</Text>
      <Text style={styles.category}>Last watered</Text>
      <Text style={styles.details}>
        {plant?.lastWateredAtTimestamp
          ? `${format(plant.lastWateredAtTimestamp, dateFormat)}`
          : "Never"}
      </Text>
      <Text style={styles.category}>Days since last watered</Text>
      <Text style={styles.details}>
        {plant?.lastWateredAtTimestamp
          ? `${differenceInCalendarDays(Date.now(), plant.lastWateredAtTimestamp)} days`
          : "N/A"}
      </Text>
      <PlantlyButton title="Water me!" onPress={handleWater} />
      <TouchableOpacity onPress={handleDeletePlant}>
        <Text style={styles.delete}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  category: {
    fontSize: 18,
    fontWeight: "400",
  },
  details: {
    marginTop: 2,
    marginBottom: 24,
    fontSize: 18,
    fontWeight: "bold",
    color: theme.colors.green,
  },
  delete: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 20,
    color: theme.colors.grey,
  },
});
