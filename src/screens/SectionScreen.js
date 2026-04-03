import React, { useContext } from 'react';
import { AppContext } from '../../App';
import { sections } from '../data/content';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Linking } from 'react-native';

export default function SectionScreen({ route, navigation }) {
  const { sectionId } = route.params;
  const { t, theme } = useContext(AppContext);
  const section = sections.find((item) => item.id === sectionId);

  if (!section) {
    return null;
  }

  return (
    <SafeAreaView style={[styles.safeArea, theme === 'dark' && styles.safeAreaDark]}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>← {t.back}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{section.title}</Text>
        <Text style={styles.updated}>{`${t.lastUpdated}: ${section.lastUpdated}`}</Text>
        <Text style={styles.summary}>{section.summary}</Text>

        {section.details.map((item, index) => (
          <View key={index} style={[styles.card, theme === 'dark' && styles.cardDark]}>
            <Text style={[styles.itemTitle, theme === 'dark' && styles.textLight]}>{item.title}</Text>
            <Text style={[styles.itemDescription, theme === 'dark' && styles.textLight]}>{item.description}</Text>
            {item.links?.map((link, linkIndex) => (
              <TouchableOpacity key={linkIndex} onPress={() => Linking.openURL(link.url)}>
                <Text style={styles.link}>{link.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
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
  updated: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 18,
  },
  summary: {
    fontSize: 16,
    color: '#4b5563',
    lineHeight: 24,
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 22,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  cardDark: {
    backgroundColor: '#111827',
    borderColor: '#334155',
  },
  itemTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  itemDescription: {
    fontSize: 14,
    color: '#4b5563',
    lineHeight: 22,
    marginBottom: 10,
  },
  link: {
    color: '#2563eb',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
  },
  textLight: {
    color: '#e2e8f0',
  },
});
