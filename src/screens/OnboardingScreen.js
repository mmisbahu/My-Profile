import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage, setProvince } from '../store/slices/appSlice';
import { provinces } from '../data/content';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { translations } from '../locales/translations';

export default function OnboardingScreen({ navigation }) {
  const dispatch = useDispatch();
  const { language, province } = useSelector(state => state.app);
  const [selectedProvince, setSelectedProvince] = useState(province);
  const t = translations[language];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>{t.onboardingTitle}</Text>
        <Text style={styles.subtitle}>{t.onboardingSubtitle}</Text>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>{t.chooseLanguage}</Text>
          <View style={styles.languageRow}>
            {['en', 'fr'].map((lang) => (
              <TouchableOpacity
                key={lang}
                style={[styles.languageButton, language === lang && styles.languageSelected]}
                onPress={() => dispatch(setLanguage(lang))}
              >
                <Text style={[styles.languageText, language === lang && styles.languageTextSelected]}>{t[lang === 'en' ? 'english' : 'french']}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>{t.chooseProvince}</Text>
          <View style={styles.provinceGrid}>
            {provinces.map((item) => (
              <TouchableOpacity
                key={item}
                style={[styles.provinceButton, selectedProvince === item && styles.provinceSelected]}
                onPress={() => setSelectedProvince(item)}
              >
                <Text style={[styles.provinceText, selectedProvince === item && styles.provinceTextSelected]}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TouchableOpacity
          style={[styles.continueButton, !selectedProvince && styles.disabledButton]}
          disabled={!selectedProvince}
          onPress={() => {
            dispatch(setProvince(selectedProvince));
            navigation.replace('Login');
          }}
        >
          <Text style={styles.continueText}>{t.continue}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  container: {
    padding: 24,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 14,
    lineHeight: 36,
  },
  subtitle: {
    fontSize: 16,
    color: '#4b5563',
    marginBottom: 28,
    lineHeight: 24,
  },
  section: {
    marginBottom: 26,
  },
  sectionLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 12,
  },
  languageRow: {
    flexDirection: 'row',
    gap: 12,
  },
  languageButton: {
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#d1d5db',
    backgroundColor: '#ffffff',
  },
  languageSelected: {
    backgroundColor: '#0071e3',
    borderColor: '#0071e3',
  },
  languageText: {
    fontSize: 14,
    color: '#111827',
    fontWeight: '600',
  },
  languageTextSelected: {
    color: '#ffffff',
  },
  provinceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  provinceButton: {
    backgroundColor: '#ffffff',
    borderColor: '#d1d5db',
    borderWidth: 1,
    borderRadius: 18,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 10,
  },
  provinceSelected: {
    backgroundColor: '#e0f2fe',
    borderColor: '#38bdf8',
  },
  provinceText: {
    color: '#111827',
    fontSize: 14,
    fontWeight: '500',
  },
  provinceTextSelected: {
    color: '#0369a1',
  },
  continueButton: {
    marginTop: 10,
    backgroundColor: '#0071e3',
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#9ca3af',
  },
  continueText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
});
