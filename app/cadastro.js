import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './../firebaseConfig';
import { useRouter } from 'expo-router';

export default function Register() {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async () => {
    if (email !== confirmEmail) {
      return Alert.alert("Erro", "Os emails não coincidem.");
    }
    if (password !== confirmPassword) {
      return Alert.alert("Erro", "As senhas não coincidem.");
    }
    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      setLoading(false);
      Alert.alert("Sucesso", "Cadastro realizado!");
      router.replace('/'); 
    } catch (error) {
      console.error(error.code, error.message);
      Alert.alert("Erro", error.message);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Easyrent - Cadastro</Text>
      <View style={styles.form}>
        <TextInput
          onChangeText={setEmail}
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
        />
        <TextInput
          onChangeText={setConfirmEmail}
          style={styles.input}
          placeholder="Confirmação de Email"
          placeholderTextColor="#888"
        />
        <TextInput
          onChangeText={setUsername}
          style={styles.input}
          placeholder="Usuário"
          placeholderTextColor="#888"
        />
        <TextInput
          onChangeText={setPassword}
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          placeholderTextColor="#888"
        />
        <TextInput
          onChangeText={setConfirmPassword}
          style={styles.input}
          placeholder="Confirmação de Senha"
          secureTextEntry
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.replace('/')}>
          <Text style={styles.buttonText}>Já tem uma conta? Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  form: {
    backgroundColor: '#A3D91C',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    maxWidth: 300,
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
    width: '100%',
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
    width: '100%',
    maxWidth: 150,
    marginTop: 10,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
