import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NOTES } from "../data/notes";

export default function FolderScreen() {
  const navigation = useNavigation();

  const tempList = [
    { name: "personal notes", number: 49 },
    { name: "study", number: 643 },
    { name: "work", number: 11 },
    // { name: "Friends", number: 542 },
    // { name: "School", number: 23 },
    // { name: "Vacation", number: 5 },
  ];

  const [folderList, setFolderList] = useState(tempList);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  function addNewNote() {
    if (name.length < 1 || number.length < 1)
      return alert("Enter name and number");

    console.log({ name, number });

    setFolderList([...folderList, { name: name, number: number }]);
    setName("");
    setNumber("");
  }

  function clearFolderList() {
    setFolderList([]);
  }

  function deleteFolder(id) {
    // const _list = folderList.splice(id, 1);

    // alert(`Deleted item ${_list[0].name} folder with ${_list[0].number}`);

    setFolderList(folderList.filter((item, index) => index != id));
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          //   flexDirection: "row",
          //   alignItems: "center",
          marginTop: 80,
        }}
      >
        <Text style={styles.folderTitleText}>folders</Text>
        <Text
          style={{
            fontSize: 16,
            color: "white",
            paddingHorizontal: 30,
            marginTop: 0,
          }}
        >
          by eProcess
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: "white",
            paddingHorizontal: 30,
            marginTop: 40,
          }}
        >
          {folderList.length} folders
        </Text>
        <TouchableOpacity
          onPress={() => {
            clearFolderList();
          }}
        >
          <Text
            style={{ paddingHorizontal: 30, color: "white", marginTop: 40 }}
          >
            Clear All
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={{ paddingHorizontal: 10, marginTop: 10 }}>
        {folderList ? (
          folderList.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                // alert(`This ${item.name} folder has ${item.number} notes`);
                // deleteFolder(index);
                navigation.navigate("Home", {
                  folderName: item.name
                 
                });
              }}
            >
              <View style={{...styles.folderItem,height:150}}>
                <Text style={{ color: "white", fontSize: 20 }}>
                  {item.name}
                </Text>
                <Text style={styles.folderItemNumber}>
                  {NOTES.filter((note) => note.folderName == item.name).length}
                </Text>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <Text>Folder list is not defined</Text>
        )}
      </ScrollView>

      <View style={styles.bottomFieldForInput}>
        <TextInput
          value={name}
          onChangeText={(e) => {
            console.log(("name here", e));
            setName(e);
          }}
          style={{
            fontSize: 22,
            marginRight: 10,
            borderWidth: 2,
            borderColor: "white",
            padding: 5,
            borderRadius: 10,
            backgroundColor: "white",
          }}
          placeholder="Enter name"
        ></TextInput>
        <TextInput
          value={number}
          onChangeText={(e) => {
            setNumber(e);
          }}
          style={{
            fontSize: 22,
            marginRight: 30,
            borderWidth: 2,
            borderColor: "white",
            padding: 5,
            borderRadius: 10,
            backgroundColor: "white",
          }}
          placeholder="Enter number"
        ></TextInput>

        <TouchableOpacity
          onPress={() => {
            //   folderList.push({ name: "Francis", number: 721 });

            addNewNote();
          }}
        >
          <View style={styles.addNewNoteButton}>
            <Text style={{ fontSize: 30, color: "white" }}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#13181A",
    height: "100%",
    // paddingHorizontal: 30,
  },

  bottomFieldForInput: {
    position: "absolute",
    bottom: 50,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  addNewNoteButton: {
    backgroundColor: "#D3595A",
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 10,
  },

  folderItem: {
    backgroundColor: "#1E2023",
    marginTop: 10,
    borderRadius: 25,
    paddingVertical: 20,
    paddingHorizontal: 20,
    // height: 150,
  },

  folderTitleText: {
    color: "white",
    fontSize: 40,
    paddingLeft: 30,
    paddingRight: 0,
  },
  folderItemNumber: {
    fontSize: 60,
    position: "absolute",
    bottom: 0,
    left: 20,
    color: "white",
  },
});
