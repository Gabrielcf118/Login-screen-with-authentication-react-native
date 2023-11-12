import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";

export default function HomeScreen() {
  const hanldeLogout = async () => {
    await signOut(auth);
  };

  return (
    <SafeAreaView className=" flex-1 flex-row justify-center items-center">
      <Text className="text-lg">Home page - </Text>
      <TouchableOpacity
        onPress={hanldeLogout}
        className="p-1 bg-red-400 rounded-lg"
      >
        <Text className="text-white text-lg font-bold">logout </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
