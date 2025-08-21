// src/screens/Onboarding/AgreementScreen.tsx
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { OnboardingStackParamList } from "../../navigation/types";
import CheckBoxItem from "../../components/CheckBoxItem";

export default function AgreementScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<OnboardingStackParamList>>();
  const [agreed, setAgreed] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollBox} contentContainerStyle={{ padding: 20, paddingTop: 40 }}>
        <Text style={styles.title}>Real Talk Before You Bite</Text>
        <Text style={styles.text}>
          We’re not doctors, nutritionists, or your mom.
          {"\n\n"}
          Mind Your Bite is here to help you make smarter food choices, not to diagnose,
          treat, or cure anything (except maybe snack confusion).
          {"\n\n"}
          Always double-check with a real healthcare pro if you’ve got medical concerns. What you eat is totally up to you, we’re just your friendly food buddy, not your boss. 😇
        </Text>

        <View style={{ height: 12 }} />
        <View style={styles.card}>
          <CheckBoxItem
            label="I understand and agree"
            checked={agreed}
            onPress={() => setAgreed((v) => !v)}
          />
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.btnText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.nextBtn, !agreed && styles.nextBtnDisabled]}
          disabled={!agreed}
          onPress={() => navigation.navigate("Main")}
        >
          <Text style={styles.btnText}>All clear! Let’s scan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0B0B0F" },
  title: { color: "white", fontSize: 32, marginBottom: 16, fontWeight: "800" },
  scrollBox: { flex: 1 },
  text: { color: "white", fontSize: 16, lineHeight: 22 },
  card: { backgroundColor: "#17171C", borderRadius: 16, overflow: "hidden" },
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
  btnText: { color: "white", fontWeight: "bold" },
});