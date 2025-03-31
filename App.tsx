import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from './src/pages/home/HomePage';
import TrainingPage from './src/pages/training/TrainingPage'; // Crie essas páginas depois
import FreeAreaPage from './src/pages/freeArea/FreeAreaPage';
import ChallengePage from './src/pages/challenge/ChallengePage';
import StatisticsPage from './src/pages/statistics/StatisticsPage';
import SettingsPage from './src/pages/settings/SettingsPage';
import { RootStackParamList } from './src/global/navigation';



const Stack = createStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Training"
          component={TrainingPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FreeArea"
          component={FreeAreaPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Challenge"
          component={ChallengePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Statistics"
          component={StatisticsPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsPage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
