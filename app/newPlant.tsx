import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import { theme } from "@/theme";
import { PlantlyImage } from "@/components/PlantlyImage";
import { PlantlyButton } from "@/components/PlantlyButton";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function NewScreen() {
  const [name, setName] = useState("");
  const [wateringFrequency, setWateringFrequency] = useState("");

  const handleSubmit = () => {
    if (!name) {
      Alert.alert("Please enter a name");
      return;
    }

    if (!wateringFrequency) {
      Alert.alert("Please enter a watering frequency");
      return;
    }

    if (isNaN(+wateringFrequency)) {
      Alert.alert("Please enter a valid number for watering frequency");
      return;
    }

    Alert.alert("Plant added!");
  };

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={{
        alignItems: "center",
        padding: 20,
      }}
      keyboardShouldPersistTaps="handled"
    >
      <View>
        <PlantlyImage />
      </View>
      <Text style={styles.text}>Name</Text>
      <TextInput
        style={styles.textInput}
        placeholder="E.g. Casper the Cactus"
        onChangeText={setName}
      ></TextInput>
      <Text style={styles.text}>Watering Frequency (every x days)</Text>
      <TextInput
        style={[styles.textInput, styles.lastInput]}
        placeholder="E.g. 4"
        onChangeText={setWateringFrequency}
        keyboardType="number-pad"
      ></TextInput>
      <PlantlyButton title="Add Plant" onPress={handleSubmit} />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  text: {
    fontSize: 18,
    flex: 1,
    alignSelf: "flex-start",
  },
  textInput: {
    height: 44,
    fontSize: 18,
    borderColor: theme.colors.lightGrey,
    borderWidth: 2,
    borderRadius: 6,
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 20,
    width: "100%",
  },
  lastInput: {
    marginBottom: 36,
  },
});
