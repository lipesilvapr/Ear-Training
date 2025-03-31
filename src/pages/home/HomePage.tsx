import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native'; 
import colors from '../../global/colors';
import HomeSections from '../../components/homeSections/HomeSections';
import { RootStackParamList } from '../../global/navigation';
import { StackNavigationProp } from '@react-navigation/stack';

const HomePage = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <SafeAreaView style={style.container}>
        <View style={style.header}>
          <Text style={style.title}>Ear Training</Text>
        </View>
        <View style={style.content}>
          <HomeSections
            title="Training"
            description="Free Training for all levels"
            color={colors.training}
            onPress={() => navigation.navigate('Training')}
          />
          <HomeSections
            title="Free Area"
            description="Play the notes freely to get used to it"
            color={colors.freeArea}
            onPress={() => navigation.navigate('FreeArea')}
          />
          <HomeSections
            title="Challenge"
            description="Hit the most notes in 60s"
            color={colors.challenge}
            onPress={() => navigation.navigate('Challenge')}
          />
          <HomeSections
            title="Statistics"
            description="See your statistics"
            color={colors.statistics}
            onPress={() => navigation.navigate('Statistics')}
          />
          <HomeSections
            title="Settings"
            description="Change your settings"
            color={colors.settings}
            onPress={() => navigation.navigate('Settings')}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default HomePage;


const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#333634',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  header: {
    width: '100%',
    height: 70,
    backgroundColor: colors.green,
    boxShadow: '0px 2px 5px rgba(4, 29, 1, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.white,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 5,
  }
});
