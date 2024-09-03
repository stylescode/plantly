import { Image, useWindowDimensions } from "react-native";

type Props = {
  size?: number;
};

export function PlantlyImage({ size }: Props) {
  const { width } = useWindowDimensions();
  const imageWidth = width / 1.5;
  const maxWidth = 400;
  const imageSize = size || Math.min(imageWidth, maxWidth);

  return (
    <Image
      source={require("@/assets/plantly.png")}
      style={{
        width: imageSize,
        height: imageSize,
      }}
    />
  );
}
