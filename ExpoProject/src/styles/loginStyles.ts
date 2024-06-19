// src/styles/loginStyles.ts

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loginImage: {
    width: '80%', // Use uma porcentagem ou tamanho específico que se adeque bem à tela
    height: undefined, // A altura é undefined para manter a proporção original da imagem
    aspectRatio: 1, // Garante que a imagem mantenha a proporção quadrada
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#007bff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
  },
});
