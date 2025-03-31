import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../../global/colors';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

type HeaderProps = {
  title: string;
  color: string;
};

const Header = ({title, color}: HeaderProps) => {
  const navigation = useNavigation();

  return (
    <View style={[style.header, {backgroundColor: color}]}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={style.backButton}>
        <Icon name="chevron-back-outline" size={30} color={colors.white} />
      </TouchableOpacity>
      <Text style={style.title}>{title}</Text>
    </View>
  );
};

export default Header;

const style = StyleSheet.create({
  header: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.white,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 5,
  },
  backButton: {
    position: 'absolute',
    left: 10,
    top: 20,
    zIndex: 1,
  },
});
