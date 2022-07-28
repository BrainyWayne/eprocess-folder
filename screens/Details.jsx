import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useState } from "react";
import { styles } from "./FolderScreen";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import { NOTES } from "../data/notes";
import { useEffect } from "react";

export default function Details() {
  const navigation = useNavigation();

  const totalRouteLength = navigation.getState().routes.length;

  const passedParams =
    navigation.getState().routes[totalRouteLength - 1].params;

  //   const note = passedParams.note;

  const [note, setNote] = useState(passedParams.note);

  function updateSection(key, value) {
    NOTES.filter((item) => item.id == note.id)[0][key] = value;
    setNote({ ...note, [key]: value });
  }


// let count = 0

//   useEffect(() => {
//     // console.log("Note has been updated");
//     // setNote(NOTES.filter((item) => item.id == note.id));
//     ++count
//     console.log(count);
//   }, [count]);

  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <View style={{ paddingLeft: 30, marginTop: 30 }}>
          <Text>Back</Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 30,
          paddingHorizontal: 30,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "black", textTransform: "uppercase" }}>
          {note.folderName}
        </Text>
        <Text style={{ marginLeft: 10 }}>-</Text>
        <Text
          style={{ color: "black", marginLeft: 10, textTransform: "uppercase" }}
        >
          {note.timestamp}
        </Text>
      </View>

      <Text style={{ paddingHorizontal: 30, marginTop: 30 }}>
        ID: {note.id}
      </Text>

      <TextInput
        onChangeText={(e) => {
          updateSection("title", e);
        }}
        multiline={true}
        style={{ ...styles.folderTitleText, color: "black" }}
        value={note.title}
      ></TextInput>

      <TextInput
        onChangeText={(e) => {
          updateSection("note", e);
        }}
        multiline={true}
        style={{
          paddingHorizontal: 30,
          color: "black",
          marginTop: 30,
          fontSize: 24,
          color: "gray",
        }}
        defaultValue={note.note}
      ></TextInput>
    </SafeAreaView>
  );
}
