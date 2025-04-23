// src/pages/TrainingPage.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../global/colors';
import Header from '../../components/header/Header';
import { getSound, getAllNotes, loadSounds } from '../../global/soundManager';

const getRandomItems = (correctItem: any, allNotes: any[], count = 4) => {
  const others = allNotes.filter(n => n.name !== correctItem.name);
  const shuffled = others.sort(() => 0.5 - Math.random()).slice(0, count - 1);
  return [...shuffled, correctItem].sort(() => 0.5 - Math.random());
};

const TrainingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentNote, setCurrentNote] = useState<any>(null);
  const [options, setOptions] = useState<any[]>([]);
  const [feedback, setFeedback] = useState<string | null>(null);

  const NOTES = getAllNotes();

  useEffect(() => {
    loadSounds().then(() => {
      setIsLoaded(true);
    });
  }, []);

  const playNote = (note: any) => {
    const sound = getSound(note.file);
    if (sound) {
      sound.setCurrentTime(0);
      sound.play();
    }
  };

  const startNewRound = () => {
    const randomNote = NOTES[Math.floor(Math.random() * NOTES.length)];
    const options = getRandomItems(randomNote, NOTES);
    setCurrentNote(randomNote);
    setOptions(options);
    setFeedback(null);
    setTimeout(() => playNote(randomNote), 500);
  };

  const handleAnswer = (selected: any) => {
    if (selected.name === currentNote.name) {
      setFeedback('✅ Correct!');
    } else {
      setFeedback(`❌ Nooo! It was ${currentNote.name}`);
    }
  };

  useEffect(() => {
    if (isLoaded) {
      startNewRound();
    }
  }, [isLoaded]);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Training" color={colors.training} />
      <View style={styles.content}>
        <Text style={styles.description}>Listen to the note and choose the correct one</Text>

        <View style={styles.buttonGroup}>
          {options.map(opt => (
            <TouchableOpacity
              key={opt.name}
              style={styles.optionButton}
              onPress={() => handleAnswer(opt)}>
              <Text style={styles.optionText}>{opt.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={styles.repeatButton}
          onPress={() => playNote(currentNote)}>
          <Text style={styles.repeatText}>🔁 Repeat sound</Text>
        </TouchableOpacity>

        {feedback && (
          <Text style={styles.feedback}>{feedback}</Text>
        )}

        {feedback && (
          <TouchableOpacity style={styles.nextButton} onPress={startNewRound}>
            <Text style={styles.optionText}>Próximo</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default TrainingPage;

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
    color: colors.white,
    marginBottom: 20,
  },
  buttonGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'center',
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: colors.secondary,
    padding: 14,
    borderRadius: 8,
    width: 100,
    alignItems: 'center',
    margin: 5,
  },
  optionText: {
    color: colors.background,
    fontWeight: 'bold',
  },
  repeatButton: {
    marginVertical: 10,
    padding: 12,
    backgroundColor: colors.green,
    borderRadius: 8,
  },
  repeatText: {
    color: colors.white,
    fontWeight: 'bold',
  },
  feedback: {
    marginTop: 20,
    fontSize: 18,
    color: colors.white,
    fontWeight: 'bold',
  },
  nextButton: {
    marginTop: 20,
    backgroundColor: colors.secondary,
    padding: 12,
    borderRadius: 8,
  },
});
