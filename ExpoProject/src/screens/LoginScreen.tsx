// src/screens/LoginScreen.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginPress = () => {
    if (!email.trim()) {
      Alert.alert('Erro', 'Por favor, informe um email válido.');
      return;
    }

    if (!email.includes('@')) {
      Alert.alert('Erro', 'O email informado não é válido.');
      return;
    }

    if (!password.trim()) {
      Alert.alert('Erro', 'Por favor, informe sua senha.');
      return;
    }

    navigation.navigate('Home'); // Navega para a tela Home após o login bem-sucedido
  };

  return (
    <View style={styles.container}>
      {/* Imagem acima da palavra "Login" */}
      <Image source={require('../assets/login-image.png')} style={styles.loginImage} />
      
      <Text style={styles.title}>Login</Text>
      
      {/* Campo de Email */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      
      {/* Campo de Senha */}
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      
      {/* Botão de Login */}
      <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      
      {/* Rodapé */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Desenvolvido para a Residência em TIC - 2024.2 {'\n\n'} Matheus Heleno
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loginImage: {
    width: '32%',
    height: 150,
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

export default LoginScreen;
