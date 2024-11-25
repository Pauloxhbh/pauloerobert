import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; // Importando useRouter para navegação

const SearchScreen = () => {
  const [search, setSearch] = useState('');
  const [locations, setLocations] = useState([
    'Canadá', 'New York', 'Madrid', 'Singapura', 'Noruega', 'Paris', 'Bangladesh', 'Inglaterra', 'Brasília', 'Nápoles'
  ]);

  const clearSearch = () => {
    setSearch('');
  };

  const router = useRouter(); // Inicializando o useRouter

  return (
    <View style={styles.container}>
      {/* Barra de busca */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={24} color="black" />
        <TextInput
          style={styles.searchInput}
          placeholder="Entre no seu teclado"
          value={search}
          onChangeText={setSearch}
        />
        {search.length > 0 && (
          <TouchableOpacity onPress={clearSearch}>
            <Ionicons name="close" size={24} color="black" />
          </TouchableOpacity>
        )}
      </View>

      {/* Lista de locais */}
      <FlatList
        data={locations}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Text style={styles.locationItem}>{item}</Text>
        )}
        ListFooterComponent={() => (
          <TouchableOpacity onPress={clearSearch}>
            <Text style={styles.clearButton}>Limpar</Text>
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
    margin: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  locationItem: {
    padding: 15,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  clearButton: {
    color: 'blue',
    padding: 15,
    textAlign: 'right',
    marginRight: 10,
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

export default SearchScreen;
