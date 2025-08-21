// src/screens/onboarding/NameScreen.tsx
import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { OnboardingStackParamList } from "../../navigation/types";

type Props = NativeStackScreenProps<OnboardingStackParamList, "Name">;

export default function NameScreen({ navigation }: Props) {
  const [name, setName] = useState("");

  const handleContinue = () => {
    navigation.navigate("Agreement");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.hint}>One last step! How should we call you?</Text>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputIcon}>👤</Text>
          <TextInput
            style={styles.input}
            placeholder="How should we call you?"
            placeholderTextColor="#8E8E93"
            value={name}
            onChangeText={setName}
          />
        </View>
      </View>

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.btnText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.nextBtn, !name && styles.nextBtnDisabled]}
          disabled={!name}
          onPress={handleContinue}
        >
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0B0B0F" },
  inner: { padding: 20, paddingTop: 40 },
  hint: { color: "#fff", fontSize: 28, fontWeight: "800", marginBottom: 16 },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#17171C",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 14,
  },
  inputIcon: { fontSize: 20, marginRight: 8 },
  input: { color: "#fff", flex: 1, fontSize: 16 },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: "#222",
    paddingHorizontal: 20,
  },
  backBtn: {
    padding: 15,
    backgroundColor: "#333",
    borderRadius: 10,
    flex: 0.45,
    alignItems: "center",
  },
  nextBtn: {
    padding: 15,
    backgroundColor: "#0B64E1",
    borderRadius: 10,
    flex: 0.45,
    alignItems: "center",
  },
  nextBtnDisabled: { opacity: 0.5 },
  btnText: { color: "#fff", fontWeight: "bold" },
});