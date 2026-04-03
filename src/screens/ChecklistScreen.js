import React, { useContext, useState } from 'react';
import { AppContext } from '../../App';
import { sections } from '../data/content';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const checklist = [
  {
    title: 'Week 1',
    items: [
      'Activate your phone plan',
      'Open a Canadian bank account',
      'Locate the nearest grocery store and transit stops',
      'Meet a local settlement service',
    ],
  },
  {
    title: 'Week 2',
    items: [
      'Apply for SIN',
      'Start your provincial health card application',
      'Research newcomer housing programs',
      'Join a LINC or French class waitlist',
    ],
  },
  {
    title: 'Weeks 3–4',
    items: [
      'Confirm PR card status',
      'Search jobs and prepare a resume',
      'Register children for school',
      'Explore community and support groups',
    ],
  },
];

export default function ChecklistScreen({ navigation }) {
  const { t, theme } = useContext(AppContext);
  const [checkedItems, setCheckedItems] = useState({});

  const toggleItem = (index, itemIndex) => {
    const key = `${index}-${itemIndex}`;
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <SafeAreaView style={[styles.safeArea, theme === 'dark' && styles.safeAreaDark]}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>← {t.back}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{t.checklistTitle}</Text>
        <Text style={styles.summary}>{`${t.lastUpdated}: 2026-03-01`}</Text>

        {checklist.map((group, index) => (
          <View key={group.title} style={styles.groupCard}>
            <Text style={[styles.groupTitle, theme === 'dark' && styles.textLight]}>{group.title}</Text>
            {group.items.map((item, itemIndex) => {
              const key = `${index}-${itemIndex}`;
              const checked = checkedItems[key];
              return (
                <TouchableOpacity key={key} style={styles.checkItem} onPress={() => toggleItem(index, itemIndex)}>
                  <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
                    {checked && <Text style={styles.checkboxMark}>✓</Text>}
                  </View>
                  <Text style={[styles.checkLabel, checked && styles.checkLabelChecked, theme === 'dark' && styles.textLight]}>{item}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}

        <View style={styles.noteCard}>
          <Text style={[styles.noteTitle, theme === 'dark' && styles.textLight]}>Helpful Resources</Text>
          <Text style={[styles.noteText, theme === 'dark' && styles.textLight]}>Use this checklist even without internet. Tap each item as you complete it to track your first month in Canada.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  safeAreaDark: {
    backgroundColor: '#0f172a',
  },
  container: {
    padding: 24,
    paddingBottom: 40,
  },
  backButton: {
    marginBottom: 20,
  },
  backText: {
    color: '#2563eb',
    fontSize: 15,
    fontWeight: '600',
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 8,
  },
  summary: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 24,
  },
  groupCard: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 18,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  groupTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 14,
  },
  checkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#d1d5db',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  checkboxChecked: {
    backgroundColor: '#0071e3',
    borderColor: '#0071e3',
  },
  checkboxMark: {
    color: '#ffffff',
    fontWeight: '700',
  },
  checkLabel: {
    flex: 1,
    color: '#111827',
    fontSize: 15,
    lineHeight: 22,
  },
  checkLabelChecked: {
    color: '#4b5563',
    textDecorationLine: 'line-through',
  },
  noteCard: {
    backgroundColor: '#e0f2fe',
    borderRadius: 20,
    padding: 18,
    marginTop: 12,
  },
  noteTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0c4a6e',
    marginBottom: 8,
  },
  noteText: {
    color: '#164e63',
    lineHeight: 22,
  },
  textLight: {
    color: '#e2e8f0',
  },
});
