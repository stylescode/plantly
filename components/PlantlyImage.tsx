import { Image, useWindowDimensions } from "react-native";

type Props = {
  size?: number;
  imageURI?: string;
};

export function PlantlyImage({ size, imageURI }: Props) {
  const { width } = useWindowDimensions();
  const imageWidth = width / 1.5;
  const maxWidth = 400;
  const imageSize = size || Math.min(imageWidth, maxWidth);

  return (
    <Image
      source={imageURI ? { uri: imageURI } : require("@/assets/plantly.png")}
      style={{
        width: imageURI ? imageSize * 0.8 : imageSize,
        height: imageURI ? imageSize * 0.8 : imageSize,
        borderRadius: 200,
        margin: imageURI ? imageSize * 0.1 : 1,
      }}
    />
  );
}
