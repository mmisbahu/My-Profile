import React, { useContext, useState } from 'react';
import { AppContext } from '../../App';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const faqs = [
  {
    question: 'How do I apply for my SIN?',
    answer: 'Visit Service Canada online or in person with your passport and PR card.',
  },
  {
    question: 'What is OHIP?',
    answer: 'Ontario Health Insurance Plan provides healthcare coverage in Ontario.',
  },
  {
    question: 'How to find a job?',
    answer: 'Use job boards like Indeed.ca, connect with settlement agencies, and network.',
  },
  // Add more FAQs
];

export default function FAQScreen({ navigation }) {
  const { t, theme } = useContext(AppContext);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleAsk = () => {
    // Simple mock AI response
    const answer = faqs.find(faq => faq.question.toLowerCase().includes(query.toLowerCase()));
    setResponse(answer ? answer.answer : 'Please contact a settlement agency for detailed advice.');
  };

  return (
    <SafeAreaView style={[styles.safeArea, theme === 'dark' && styles.safeAreaDark]}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>← {t.back}</Text>
        </TouchableOpacity>

        <Text style={[styles.title, theme === 'dark' && styles.titleDark]}>{t.faqTitle}</Text>

        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder={t.askQuestion}
          style={[styles.input, theme === 'dark' && styles.inputDark]}
        />
        <TouchableOpacity style={styles.button} onPress={handleAsk}>
          <Text style={styles.buttonText}>{t.ask}</Text>
        </TouchableOpacity>

        {response ? <Text style={[styles.response, theme === 'dark' && styles.responseDark]}>{response}</Text> : null}

        <Text style={[styles.sectionTitle, theme === 'dark' && styles.textLight]}>{t.commonFaqs}</Text>
        {faqs.map((faq, index) => (
          <View key={index} style={[styles.faqItem, theme === 'dark' && styles.faqItemDark]}>
            <Text style={[styles.question, theme === 'dark' && styles.textLight]}>{faq.question}</Text>
            <Text style={[styles.answer, theme === 'dark' && styles.textLight]}>{faq.answer}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8fafc' },
  safeAreaDark: { backgroundColor: '#0f172a' },
  container: { padding: 24 },
  backButton: { marginBottom: 16 },
  backText: { fontSize: 16, color: '#3b82f6' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16, color: '#111827' },
  titleDark: { color: '#f1f5f9' },
  input: { borderWidth: 1, borderColor: '#d1d5db', padding: 12, borderRadius: 8, marginBottom: 12 },
  inputDark: { borderColor: '#374151', color: '#f1f5f9' },
  button: { backgroundColor: '#3b82f6', padding: 12, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  response: { marginTop: 12, fontSize: 16, color: '#111827' },
  responseDark: { color: '#f1f5f9' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 24, marginBottom: 12, color: '#111827' },
  textLight: { color: '#f1f5f9' },
  faqItem: { marginBottom: 16, padding: 16, backgroundColor: '#fff', borderRadius: 8 },
  faqItemDark: { backgroundColor: '#1e293b' },
  question: { fontWeight: 'bold', marginBottom: 8, color: '#111827' },
  answer: { color: '#6b7280' },
});