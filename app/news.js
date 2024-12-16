import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; // Adicionando o useRouter

const notifications = [
  'nova casa localizada em sua região, aperte aqui e confira!',
  'nova casa postada por um perfil que você segue, confira agora!',
  'sua casa foi marcada por um novo usuário, você receberá mais notoriedade',
  'nova casa localizada em sua região, aperte aqui e confira!',
  'nova casa postada por um perfil que você segue, confira agora!',
  'sua casa foi marcada por um novo usuário, você receberá mais notoriedade',
  'nova casa localizada em sua região, aperte aqui e confira!',
  'nova casa postada por um perfil que você segue, confira agora!',
];

const NotificationsScreen = () => {
  const router = useRouter(); // Inicializando o useRouter

  return (
    <View style={styles.container}>
      {/* Barra de busca */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={24} color="black" />
        <TextInput style={styles.searchInput} placeholder="Entre no seu teclado" />
        <TouchableOpacity>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Lista de notificações */}
      <FlatList
        data={notifications}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.notificationItem}>
            <Ionicons name="home-outline" size={24} color="black" />
            <Text style={styles.notificationText}>{item}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Navbar */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => router.push('/home')}>
          <Ionicons name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/search')}>
          <Ionicons name="search" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/news')}>
          <Ionicons name="notifications" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/profile')}>
          <Ionicons name="person-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#E5E5E5',
    borderRadius: 5,
    marginHorizontal: '5%',
    marginVertical: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: '5%',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  notificationText: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
    flexWrap: 'wrap',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#ffffff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default NotificationsScreen;
