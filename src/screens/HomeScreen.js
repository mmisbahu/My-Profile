import React, { useContext, useMemo } from 'react';
import { AppContext } from '../../App';
import { sections } from '../data/content';
import SectionCard from '../components/SectionCard';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const featured = ['airport', 'checklist', 'documents', 'housing', 'healthcare', 'education', 'community', 'directory', 'help'];

export default function HomeScreen({ navigation }) {
  const { province, language, t, theme, setTheme } = useContext(AppContext);
  const visibleSections = useMemo(
    () => sections.filter((item) => featured.includes(item.id)),
    []
  );

  return (
    <SafeAreaView style={[styles.safeArea, theme === 'dark' && styles.safeAreaDark]}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>{t.homeTitle}</Text>
            <Text style={styles.subtitle}>{t.homeSubtitle}</Text>
            <Text style={styles.province}>{province || t.provinceDefault}</Text>
          </View>
          <TouchableOpacity
            style={[styles.themeButton, theme === 'dark' && styles.themeButtonDark]}
            onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <Text style={styles.themeText}>{theme === 'dark' ? '☀️' : '🌙'}</Text>
          </TouchableOpacity>
        </View>

        {visibleSections.map((section) => (
          <SectionCard
            key={section.id}
            title={section.title}
            description={section.summary}
            lastUpdated={section.lastUpdated}
            buttonLabel={section.id === 'checklist' ? t.startChecklist : t.viewSection}
            onPress={() => {
              if (section.id === 'checklist') {
                navigation.navigate('Checklist');
              } else if (section.id === 'directory') {
                navigation.navigate('Directory');
              } else {
                navigation.navigate('Section', { sectionId: section.id });
              }
            }}
          />
        ))}
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
  header: {
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#4b5563',
    lineHeight: 22,
  },
  province: {
    marginTop: 12,
    fontSize: 14,
    color: '#6b7280',
  },
  themeButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
  },
  themeButtonDark: {
    backgroundColor: '#1e293b',
  },
  themeText: {
    fontSize: 22,
  },
});
