import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './../firebaseConfig';
import { useRouter } from 'expo-router';

export default function App() {
  const [exibirSenha, setExibirSenha] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
 
  const handleLogin = async () => {
    try { 
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, senha);
      setLoading(false);
      router.replace('/home');
    }
      catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode);
        console.error(errorMessage);
        setLoading(false);
      }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Easyrent</Text>
      <View style={styles.form}>
        <Text style={styles.title}>Entrar</Text>
        <TextInput
          onChangeText={setEmail}
          style={styles.input}
          placeholder="example@gmail.com"
          placeholderTextColor="#888"
        />
        <TextInput
          onChangeText={setSenha}
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={!exibirSenha}
          placeholderTextColor="#888"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => setExibirSenha(!exibirSenha)}
        >
          <Text style={styles.buttonText}>
            {exibirSenha ? "Ocultar Senha" : "Exibir Senha"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    </View>
  );
};

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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
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
