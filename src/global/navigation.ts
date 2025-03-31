export type RootStackParamList = {
  Home: undefined;
  Training: undefined;
  FreeArea: undefined;
  Challenge: undefined;
  Statistics: undefined;
  Settings: undefined;
};

// Extensão para o uso com React Navigation
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
