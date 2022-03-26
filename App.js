import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  });

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#78909c' : '#fafafa',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text style={styles.title}>Home</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 32,
    paddingHorizontal: 24,
    fontSize: 24,
    fontWeight: '600',
    color: '#880e4f',
  },
});

export default App;
