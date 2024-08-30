import { Image, useWindowDimensions } from "react-native";

export function PlantlyImage() {
  const { width } = useWindowDimensions();
  const imageWidth = width / 1.5;
  const maxWidth = 400;

  return (
    <Image
      source={require("@/assets/plantly.png")}
      style={{
        width: Math.min(imageWidth, maxWidth),
        height: Math.min(imageWidth, maxWidth),
      }}
    />
  );
}
