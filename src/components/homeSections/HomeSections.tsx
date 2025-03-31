import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../global/colors';

interface HomeSectionsProps {
  title: string;
  description: string;
  color: string; 
  onPress: () => void;
}

const HomeSections = ({ title, description, color, onPress }: HomeSectionsProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color }]} 
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>
      <Text>{description}</Text>
    </TouchableOpacity>
  );
};

export default HomeSections;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginBottom: 16,
    display: 'flex',
    flexDirection: 'column',
    height: '15%',
    width: '90%',
    padding: 16, 
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 12,
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.5)",
  },
  title:{
    fontSize: 25,
    fontWeight: "bold",
    color: colors.white,
    textShadowColor: "rgba(0, 0, 0, 0.8)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 5,
    marginBottom: 4,
  }
});