import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Sound from 'react-native-sound';
import colors from '../../global/colors';
import Header from '../../components/header/Header';

const NOTES = [
  {name: 'Dó', file: 'do_sound'},
  {name: 'Ré', file: 're_sound'},
  {name: 'Mi', file: 'mi_sound'},
  {name: 'Fá', file: 'fa_sound'},
  {name: 'Sol', file: 'sol_sound'},
  {name: 'Lá', file: 'la_sound'},
  {name: 'Si', file: 'si_sound'},
];

const FreeAreaPage = () => {
  const [sounds, setSounds] = useState<{[key: string]: Sound | null}>({});

  useEffect(() => {
    const loadedSounds: {[key: string]: Sound} = {};

    NOTES.forEach(note => {
      const audio = new Sound(note.file, Sound.MAIN_BUNDLE, error => {
        if (error) {
          console.log(`Erro ao carregar ${note.name}:`, error);
          return;
        }
        loadedSounds[note.file] = audio;
      });
    });

    setSounds(loadedSounds);

    return () => {
      Object.values(loadedSounds).forEach(sound => sound?.release());
    };
  }, []);

  const playSound = (file: string) => {
    const sound = sounds[file];
    if (sound) {
      sound.setCurrentTime(0); // Reinicia o som para tocar do início
      console.log(`Tocando ${file}...`);
      sound.setVolume(1.0);
      sound.play(success => {
        if (success) {
          console.log(`${file} finalizado com sucesso.`);
        } else {
          console.log(`Erro ao reproduzir ${file}.`);
        }
      });
    } else {
      console.log(`Som ${file} ainda não carregado.`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Free Area" color={colors.freeArea} />
      <View style={styles.content}>
        <Text style={styles.description}>Toque uma das notas abaixo:</Text>
        <View style={styles.buttonsContainer}>
          {NOTES.map(note => (
            <TouchableOpacity
              key={note.file}
              style={styles.button}
              onPress={() => playSound(note.file)}>
              <Text style={styles.buttonText}>{note.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
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
  content: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
    color: colors.white,
  },
  button: {
    backgroundColor: colors.secondary,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: 100,
    marginBottom: 10,
  },
  buttonsContainer:{
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    gap: 10,
  },
  buttonText: {
    color: colors.background,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
