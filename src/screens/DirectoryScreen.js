import React, { useContext, useMemo, useState } from 'react';
import { AppContext } from '../../App';
import { directoryAgencies } from '../data/content';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Linking, FlatList } from 'react-native';

export default function DirectoryScreen({ navigation }) {
  const { t, theme } = useContext(AppContext);
  const [query, setQuery] = useState('');

  const filteredAgencies = useMemo(() => {
    const lowerQuery = query.trim().toLowerCase();
    if (!lowerQuery) return directoryAgencies;
    return directoryAgencies.filter((agency) =>
      agency.city.toLowerCase().includes(lowerQuery) ||
      agency.province.toLowerCase().includes(lowerQuery) ||
      agency.name.toLowerCase().includes(lowerQuery) ||
      agency.service.toLowerCase().includes(lowerQuery)
    );
  }, [query]);

  return (
    <SafeAreaView style={[styles.safeArea, theme === 'dark' && styles.safeAreaDark]}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>← {t.back}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{t.directoryTitle || 'Settlement Agency Directory'}</Text>
        <Text style={styles.summary}>{t.directorySubtitle || 'Search by city or province to find newcomer settlement support.'}</Text>

        <View style={styles.searchContainer}>
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder={t.searchAgencyPlaceholder || 'Search agencies by city, province or service'}
            placeholderTextColor={theme === 'dark' ? '#94a3b8' : '#9ca3af'}
            style={[styles.searchInput, theme === 'dark' && styles.searchInputDark]}
          />
        </View>

        <FlatList
          data={filteredAgencies}
          keyExtractor={(item) => item.name}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => (
            <View style={[styles.card, theme === 'dark' && styles.cardDark]}>
              <Text style={[styles.agencyName, theme === 'dark' && styles.textLight]}>{item.name}</Text>
              <Text style={[styles.agencyMeta, theme === 'dark' && styles.textLight]}>{`${item.city}, ${item.province}`}</Text>
              <Text style={[styles.agencyService, theme === 'dark' && styles.textLight]}>{item.service}</Text>
              <View style={styles.linksRow}>
                <TouchableOpacity onPress={() => Linking.openURL(`tel:${item.phone}`)}>
                  <Text style={styles.linkButton}>{item.phone}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL(item.website)}>
                  <Text style={styles.linkButton}>{item.website}</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          ListEmptyComponent={
            <View style={styles.emptyState}>
              <Text style={[styles.emptyText, theme === 'dark' && styles.textLight]}>No agencies found. Try another city or province.</Text>
            </View>
          }
        />
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
    fontSize: 15,
    color: '#4b5563',
    lineHeight: 22,
    marginBottom: 18,
  },
  searchContainer: {
    marginBottom: 18,
  },
  searchInput: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 18,
    color: '#111827',
  },
  searchInputDark: {
    backgroundColor: '#1e293b',
    borderColor: '#334155',
    color: '#e2e8f0',
  },
  listContainer: {
    paddingBottom: 80,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 22,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
  },
  cardDark: {
    backgroundColor: '#111827',
    borderColor: '#334155',
  },
  agencyName: {
    fontSize: 17,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 6,
  },
  agencyMeta: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 10,
  },
  agencyService: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 20,
    marginBottom: 14,
  },
  linksRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  linkButton: {
    color: '#2563eb',
    fontWeight: '600',
    fontSize: 14,
    marginRight: 16,
  },
  emptyState: {
    marginTop: 40,
    alignItems: 'center',
  },
  emptyText: {
    color: '#6b7280',
    fontSize: 15,
  },
  textLight: {
    color: '#e2e8f0',
  },
});
