import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../global/colors';
import Header from '../../components/header/Header';

const FreeAreaPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="FreeArea" color={colors.freeArea} />
      <View style={styles.content}>
        <Text style={styles.description}>
          Welcome to the FreeArea section! Here, you can practice your ear FreeArea skills.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Start FreeArea')}>
          <Text style={styles.buttonText}>Start FreeArea</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FreeAreaPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.training,
    padding: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.background,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: colors.secondary,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.background,
    fontSize: 16,
    fontWeight: 'bold',
  },
});


