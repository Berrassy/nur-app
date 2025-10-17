/**
 * Nur App - Muslim Content App
 * Main entry point
 */

import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import { ThemeProvider } from './src/context/ThemeContext';
import { AppNavigator } from './src/navigation/AppNavigator';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts();
  }, []);

  const loadFonts = async () => {
    try {
      // Note: Add your custom fonts here if available
      // For now, we'll use system fonts
      await Font.loadAsync({
        // 'ReemKufi-Regular': require('./assets/fonts/ReemKufi-Regular.ttf'),
        // 'ReemKufi-Bold': require('./assets/fonts/ReemKufi-Bold.ttf'),
        // 'NotoSans-Regular': require('./assets/fonts/NotoSans-Regular.ttf'),
        // 'NotoSans-Bold': require('./assets/fonts/NotoSans-Bold.ttf'),
      });
      setFontsLoaded(true);
    } catch (error) {
      console.error('Error loading fonts:', error);
      // Continue with system fonts
      setFontsLoaded(true);
    }
  };

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#10B981" />
      </View>
    );
  }

  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});

