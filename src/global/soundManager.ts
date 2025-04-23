// src/utils/soundManager.ts
import Sound from 'react-native-sound';

const NOTES = [
  { name: 'Dó', file: 'do_sound' },
  { name: 'Ré', file: 're_sound' },
  { name: 'Mi', file: 'mi_sound' },
  { name: 'Fá', file: 'fa_sound' },
  { name: 'Sol', file: 'sol_sound' },
  { name: 'Lá', file: 'la_sound' },
  { name: 'Si', file: 'si_sound' },
];

const sounds: { [key: string]: Sound } = {};

export const loadSounds = () => {
  return new Promise<void>((resolve) => {
    let loadedCount = 0;
    NOTES.forEach(note => {
      const sound = new Sound(note.file, Sound.MAIN_BUNDLE, error => {
        if (error) {
          console.log(`Erro ao carregar ${note.name}:`, error);
        } else {
          sounds[note.file] = sound;
        }

        loadedCount++;
        if (loadedCount === NOTES.length) {
          resolve();
        }
      });
    });
  });
};

export const getSound = (file: string) => {
  return sounds[file];
};

export const getAllNotes = () => NOTES;

export const releaseAllSounds = () => {
  Object.values(sounds).forEach(sound => sound.release());
};
