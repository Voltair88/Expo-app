import { StyleSheet, Image } from "react-native";

export default function imageViewer({ placeholder }) {
  return <Image style={styles.image} source={placeholder} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
  },
});
