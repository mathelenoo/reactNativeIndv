import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleLogoutPress = () => {
    // Exibe um alerta de confirmação antes de sair
    Alert.alert(
      'Confirmação',
      'Tem certeza que deseja sair?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Sair',
          onPress: () => {
            navigation.navigate('Login'); // Navega de volta para a tela de login
            // Implemente aqui qualquer lógica adicional de logout, como limpar o estado do usuário
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à Minha Aplicação</Text>
      
      <Image
        source={{ uri: 'https://static.tumblr.com/3mheu0i/d0Um0wiug/tumblr_lwgq7nug5x1r894h5o1_500.gif' }}
        style={styles.gif}
      />
      
      <TouchableOpacity style={styles.button} onPress={handleLogoutPress}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
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
  title: {
    fontSize: 24,
    marginBottom: 30,
    textAlign: 'center',
  },
  gif: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#dc3545',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default HomeScreen;
