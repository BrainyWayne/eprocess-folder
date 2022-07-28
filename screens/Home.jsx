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

export default function Home() {
  const navigation = useNavigation();

  const totalRouteLength = navigation.getState().routes.length;

  const passedParams =
    navigation.getState().routes[totalRouteLength - 1].params;

  const notes = NOTES.filter(
    (item) => item.folderName == passedParams.folderName
  );

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

      <Text
        style={{ ...styles.folderTitleText, color: "black", marginTop: 10 }}
      >
        {passedParams.folderName}
      </Text>

      {notes.length > 0 && (
        <Text style={{ marginLeft: 30, marginTop: 20 }}>
          {notes.length} note{notes.length == 1 ? "" : "s"}
        </Text>
      )}

      <ScrollView style={{ paddingHorizontal: 10, marginTop: 20 }}>
        {notes.map((note, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              // alert(`This ${item.name} folder has ${item.number} notes`);
              // deleteFolder(index);
                navigation.navigate("Details", {
                  note: note,
                });
            }}
          >
            <View style={{ ...styles.folderItem, height: 150 }}>
              <Text style={{ color: "white", fontSize: 20 }}>{note.title}</Text>
              <Text
                style={{
                  ...styles.folderItemNumber,
                  fontSize: 17,
                  paddingBottom: 20,
                }}
              >
                {note.note}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {notes.length < 1 && (
        <Text
          style={{
            width: "100%",
            textAlign: "center",
            marginTop: 40,
            fontWeight: "bold",
            fontSize: 25,
          }}
        >
          No note created
        </Text>
      )}
    </SafeAreaView>
  );
}
