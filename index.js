import React from 'react';
import { AppRegistry, LogBox } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import App from './src/App';
LogBox.ignoreAllLogs();

export default function Main() {
    return (
      <PaperProvider>
          <App />
      </PaperProvider>
    );
  }
  
  AppRegistry.registerComponent(appName, () => Main);