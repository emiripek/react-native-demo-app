import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { OnboardingStackParamList } from "../../navigation/types";
import CheckBoxItem from "../../components/CheckBoxItem";

type Props = NativeStackScreenProps<OnboardingStackParamList, "HowDoYouEat">;

const DIET_OPTIONS = [
  { key: "everything", label: "I eat everything", icon: "🍽️" },
  { key: "flexitarian", label: "Mostly Plant (Flexitarian)", icon: "🥗" },
  { key: "pescatarian", label: "No meat, fish OK (Pescatarian)", icon: "🐟" },
  { key: "vegan", label: "No animal products (Vegan)", icon: "🌱" },
  { key: "vegetarian", label: "No meat, fish, or poultry (Vegetarian)", icon: "🥦" },
];

const RELIGIOUS_OPTIONS = [
  { key: "halal", label: "Halal", icon: "☪️" },
  { key: "kosher", label: "Kosher", icon: "✡️" },
];

export default function HowDoYouEatScreen({ navigation }: Props) {
  const [dietSelected, setDietSelected] = useState<string[]>([]);
  const [religionSelected, setReligionSelected] = useState<string[]>([]);

  const toggleFrom = (
    from: "diet" | "religion",
    key: string,
    setter: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    setter((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>How Do You Eat?</Text>

        <Text style={styles.sectionTitle}>Diet & Lifestyle Preferences</Text>
        <View style={styles.card}>
          {DIET_OPTIONS.map((o) => (
            <CheckBoxItem
              key={o.key}
              label={o.label}
              left={<Text style={styles.emoji}>{o.icon}</Text>}
              checked={dietSelected.includes(o.key)}
              onPress={() => toggleFrom("diet", o.key, setDietSelected)}
            />
          ))}
        </View>
        <Text style={styles.caption}>Choose ALL that apply.</Text>

        <View style={{ height: 16 }} />

        <View style={styles.card}>
          {RELIGIOUS_OPTIONS.map((o) => (
            <CheckBoxItem
              key={o.key}
              label={o.label}
              left={<Text style={styles.emoji}>{o.icon}</Text>}
              checked={religionSelected.includes(o.key)}
              onPress={() => toggleFrom("religion", o.key, setReligionSelected)}
            />
          ))}
        </View>
        <Text style={styles.caption}>Choose ALL that apply.</Text>

        <View style={{ height: 20 }} />
      </ScrollView>

      <TouchableOpacity
        onPress={() => navigation.navigate("HealthConsiderations")}
        style={styles.cta}
      >
        <Text style={styles.ctaText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0B0B0F" },
  scroll: { padding: 20, paddingTop: 40 },
  title: { color: "#fff", fontSize: 32, fontWeight: "800", marginBottom: 16 },
  sectionTitle: { color: "#A1A1AA", fontSize: 18, marginBottom: 8 },
  card: { backgroundColor: "#17171C", borderRadius: 16, overflow: "hidden" },
  caption: { color: "#9CA3AF", marginTop: 8 },
  emoji: { fontSize: 20 },
  cta: {
    backgroundColor: "#0B64E1",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
    margin: 20,
  },
  ctaText: { color: "#fff", fontWeight: "700", fontSize: 16 },
});