import React, { createContext, useContext, useMemo, useState } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import OnboardingScreen from './src/screens/OnboardingScreen';
import HomeScreen from './src/screens/HomeScreen';
import SectionScreen from './src/screens/SectionScreen';
import ChecklistScreen from './src/screens/ChecklistScreen';
import DirectoryScreen from './src/screens/DirectoryScreen';
import { translations } from './src/locales/translations';

const Stack = createNativeStackNavigator();
export const AppContext = createContext(null);

export default function App() {
  const [language, setLanguage] = useState('en');
  const [province, setProvince] = useState(null);
  const [theme, setTheme] = useState('light');

  const t = useMemo(() => translations[language], [language]);

  const contextValue = {
    language,
    setLanguage,
    province,
    setProvince,
    theme,
    setTheme,
    t,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
        <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Section" component={SectionScreen} />
          <Stack.Screen name="Checklist" component={ChecklistScreen} />
          <Stack.Screen name="Directory" component={DirectoryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
