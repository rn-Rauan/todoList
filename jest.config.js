module.exports = {
  preset: "jest-expo",

  // Faz o Jest entender TS/JS moderno
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },

  // Ignore módulos ESM do Expo que não podem ser transformados
  transformIgnorePatterns: [
    "node_modules/(?!(expo|expo-modules-core|expo-status-bar|react-native"
      + "|@react-native|@react-navigation|expo-constants)/)"
  ],

  // Mocka assets estáticos
  moduleNameMapper: {
    "\\.(png|jpg|jpeg|gif|svg)$": "<rootDir>/__mocks__/fileMock.js"
  }
};
