import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../App';
import { sections } from '../data/content';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ChecklistScreen({ navigation }) {
  const { t, theme } = useContext(AppContext);
  const [checkedItems, setCheckedItems] = useState({});

  const checklistSection = sections.find(s => s.id === 'checklist');
  const checklistItems = checklistSection ? checklistSection.details : [];

  useEffect(() => {
    const loadCheckedItems = async () => {
      try {
        const stored = await AsyncStorage.getItem('checkedItems');
        if (stored) {
          setCheckedItems(JSON.parse(stored));
        }
      } catch (error) {
        console.error('Error loading checked items:', error);
      }
    };
    loadCheckedItems();
  }, []);

  const toggleItem = async (weekIndex, itemIndex) => {
    const key = `${weekIndex}-${itemIndex}`;
    const newChecked = { ...checkedItems, [key]: !checkedItems[key] };
    setCheckedItems(newChecked);
    try {
      await AsyncStorage.setItem('checkedItems', JSON.stringify(newChecked));
    } catch (error) {
      console.error('Error saving checked items:', error);
    }
  };

  return (
    <SafeAreaView style={[styles.safeArea, theme === 'dark' && styles.safeAreaDark]}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>← {t.back}</Text>
        </TouchableOpacity>

        <Text style={[styles.title, theme === 'dark' && styles.titleDark]}>{t.checklistTitle}</Text>

        {checklistItems.map((week, weekIndex) => (
          <View key={weekIndex} style={styles.weekContainer}>
            <Text style={[styles.weekTitle, theme === 'dark' && styles.weekTitleDark]}>{week.title}</Text>
            <Text style={[styles.weekDescription, theme === 'dark' && styles.weekDescriptionDark]}>{week.description}</Text>
            {week.items && week.items.map((item, itemIndex) => (
              <TouchableOpacity
                key={itemIndex}
                style={styles.itemContainer}
                onPress={() => toggleItem(weekIndex, itemIndex)}
              >
                <Text style={[styles.checkbox, theme === 'dark' && styles.checkboxDark]}>
                  {checkedItems[`${weekIndex}-${itemIndex}`] ? '☑' : '☐'}
                </Text>
                <Text style={[styles.itemText, theme === 'dark' && styles.itemTextDark]}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

  return (
    <SafeAreaView style={[styles.safeArea, theme === 'dark' && styles.safeAreaDark]}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>← {t.back}</Text>
        </TouchableOpacity>

        <Text style={[styles.title, theme === 'dark' && styles.titleDark]}>{t.checklistTitle}</Text>

        {checklistItems.map((week, weekIndex) => (
          <View key={weekIndex} style={styles.weekContainer}>
            <Text style={[styles.weekTitle, theme === 'dark' && styles.weekTitleDark]}>{week.title}</Text>
            <Text style={[styles.weekDescription, theme === 'dark' && styles.weekDescriptionDark]}>{week.description}</Text>
            {week.items && week.items.map((item, itemIndex) => (
              <TouchableOpacity
                key={itemIndex}
                style={styles.itemContainer}
                onPress={() => toggleItem(weekIndex, itemIndex)}
              >
                <Text style={[styles.checkbox, theme === 'dark' && styles.checkboxDark]}>
                  {checkedItems[`${weekIndex}-${itemIndex}`] ? '☑' : '☐'}
                </Text>
                <Text style={[styles.itemText, theme === 'dark' && styles.itemTextDark]}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
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
