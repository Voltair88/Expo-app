import { StatusBar } from "expo-status-bar";
import * as ImagePicker from "expo-image-picker";
import { Pressable, StyleSheet, View, Text } from "react-native";
import Button from "./components/Button";
import ImageViewer from "./components/ImageViewer";
import React, { useState } from "react";

const placeholderImage = require("./assets/placeholder.jpg");

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [counter, setCounter] = useState(0);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You have not selected an image");
    }
  };

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };
  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
        {/*         <ImageViewer
          placeholder={placeholderImage}
          selectedImage={selectedImage}
        /> */}
        <Text style={styles.counter}>{counter}</Text>
      </View>
      <View style={styles.buttoncontainer}>
        <Button
          title="Choose a picure"
          theme="primary"
          onPress={pickImageAsync}
        />
        <Button title="Use this photo" />
        <Pressable title="Increment" onPress={incrementCounter}>
          <Text>Increment</Text>
        </Pressable>
        <Pressable title="Decrement" onPress={decrementCounter}>
          <Text>Decrement</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  imagecontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  buttoncontainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
});
