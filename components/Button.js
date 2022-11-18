import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Button({ title, theme }) {
  if (theme === "primary") {
    return (
      <View
        style={[
          styles.button,
          { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 },
        ]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: "red" }]}
          onPress={() => alert("You pressed me!")}
        >
          <FontAwesome
            name="picture-o"
            size={24}
            color="#ffd33d"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>
            {title}
          </Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.button}
        onPress={() => alert("You have pressed a button")}
      >
        <Text style={styles.buttonLabel}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 10,
  },
  button: {
    backgroundColor: "gray",
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttonLabel: {
    color: "#fff",
    textAlign: "center",
  },
  buttonIcon: {
    marginRight: 10,
  },
});
