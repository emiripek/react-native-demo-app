import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

type Props = {
  label: string;
  left?: React.ReactNode;
  checked?: boolean;
  onPress?: () => void;
};

export default function CheckBoxItem({ label, left, checked, onPress }: Props) {
  return (
    <Pressable style={styles.row} onPress={onPress} android_ripple={{ color: "#2a2a2a" }}>
      <View style={styles.left}>{left}</View>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.box, checked && styles.boxChecked]}>{checked ? <Text style={styles.tick}>✓</Text> : null}</View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  left: { width: 28, alignItems: "center", marginRight: 12 },
  label: { color: "#fff", fontSize: 18, flex: 1 },
  box: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#3B82F6",
    alignItems: "center",
    justifyContent: "center",
  },
  boxChecked: {
    backgroundColor: "#0B64E1",
    borderColor: "#0B64E1",
  },
  tick: { color: "#fff", fontWeight: "900" },
});


