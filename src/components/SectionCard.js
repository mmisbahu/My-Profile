import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function SectionCard({ title, description, lastUpdated, onPress, buttonLabel }) {
  return (
    <Pressable style={({ pressed }) => [styles.card, pressed && styles.pressed]} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{`${lastUpdated ? `Updated ${lastUpdated}` : ''}`}</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.buttonWrapper}>
        <Text style={styles.buttonText}>{buttonLabel}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#e8e8ee',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
  },
  pressed: {
    opacity: 0.85,
  },
  header: {
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  date: {
    marginTop: 6,
    fontSize: 12,
    color: '#6b7280',
  },
  description: {
    fontSize: 14,
    color: '#4b5563',
    lineHeight: 20,
    marginBottom: 18,
  },
  buttonWrapper: {
    alignSelf: 'flex-start',
    backgroundColor: '#0071e3',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 999,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },
});
