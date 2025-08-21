// src/screens/onboarding/HealthConsiderationsScreen.tsx
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { OnboardingStackParamList } from "../../navigation/types";
import CheckBoxItem from "../../components/CheckBoxItem";

type NavProp = NativeStackNavigationProp<OnboardingStackParamList, "HealthConsiderations">;

type Item = { key: string; label: string; icon?: string };

const NONE: Item = { key: "none", label: "No health conditions or allergies", icon: "✅" };

const DIGESTIVE: Item[] = [
  { key: "lactose", label: "Lactose Intolerance", icon: "🥛" },
  { key: "gluten", label: "Gluten-Free", icon: "🍞" },
  { key: "reflux", label: "Acid Reflux", icon: "🔥" },
  { key: "ibs", label: "Digestive Sensitivity (IBS/IBD)", icon: "🌀" },
];

const ALLERGIES: Item[] = [
  { key: "eggs", label: "Eggs", icon: "🥚" },
  { key: "peanuts", label: "Peanuts", icon: "🥜" },
  { key: "tree_nuts", label: "Tree Nuts", icon: "🌰" },
  { key: "dairy", label: "Dairy", icon: "🧀" },
  { key: "wheat", label: "Wheat", icon: "🌾" },
  { key: "fish", label: "Fish", icon: "🐟" },
  { key: "shellfish", label: "Shellfish", icon: "🦐" },
  { key: "soy", label: "Soy", icon: "🌿" },
  { key: "sesame", label: "Sesame", icon: "🌿" },
  { key: "other", label: "Other", icon: "❓" },
];

const OTHER_CONDITIONS: Item[] = [
  { key: "diabetes", label: "Diabetes", icon: "💉" },
  { key: "hbp", label: "High Blood Pressure", icon: "❤️‍🩹" },
  { key: "cholesterol", label: "High Cholesterol", icon: "🩺" },
  { key: "kidney", label: "Kidney Diseases", icon: "💧" },
];

export default function HealthConsiderationsScreen() {
  const navigation = useNavigation<NavProp>();
  const [selected, setSelected] = useState<string[]>([]);

  const isSelected = (key: string) => selected.includes(key);
  const toggle = (key: string) => {
    setSelected((prev) => {
      if (key === NONE.key) {
        return prev.includes(NONE.key) ? [] : [NONE.key];
      }
      const withoutNone = prev.filter((k) => k !== NONE.key);
      return withoutNone.includes(key)
        ? withoutNone.filter((k) => k !== key)
        : [...withoutNone, key];
    });
  };

  const Section = ({ title, items }: { title: string; items: Item[] }) => (
    <View style={{ marginTop: 16 }}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.card}>
        {items.map((item) => (
          <CheckBoxItem
            key={item.key}
            label={item.label}
            left={item.icon ? <Text style={styles.emoji}>{item.icon}</Text> : undefined}
            checked={isSelected(item.key)}
            onPress={() => toggle(item.key)}
          />
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Any Health Considerations?</Text>
        <View style={styles.card}>
          <CheckBoxItem
            label={NONE.label}
            left={<Text style={styles.emoji}>{NONE.icon}</Text>}
            checked={isSelected(NONE.key)}
            onPress={() => toggle(NONE.key)}
          />
        </View>

        <Section title="DIGESTIVE CONDITIONS" items={DIGESTIVE} />
        <Section title="ALLERGIES & FOOD TO AVOID" items={ALLERGIES} />
        <Section title="OTHER CONDITIONS" items={OTHER_CONDITIONS} />

        <View style={{ height: 20 }} />
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.btnText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.nextBtn, selected.length === 0 && styles.nextBtnDisabled]}
          disabled={selected.length === 0}
          onPress={() => navigation.navigate("Name")}
        >
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0B0B0F" },
  scroll: { padding: 20, paddingTop: 40 },
  title: { color: "#fff", fontSize: 32, fontWeight: "800" },
  sectionTitle: { color: "#A1A1AA", fontSize: 18, marginBottom: 8 },
  emoji: { fontSize: 20 },
  card: { backgroundColor: "#17171C", borderRadius: 16, overflow: "hidden" },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: "#222",
    paddingHorizontal: 20,
    backgroundColor: "#0B0B0F",
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