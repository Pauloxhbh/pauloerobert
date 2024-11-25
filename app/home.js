import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const App = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Easyrent</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Image
            source={require('./img/download.webp')}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Elon Musk</Text>
          <Ionicons name="checkmark-circle" size={18} color="blue" style={styles.iconVerified} />
        </View>

        {/* Details Section */}
        <View style={styles.detailsSection}>
          <View style={styles.detailItem}>
            <Ionicons name="home-outline" size={24} color="black" />
            <Text style={styles.detailText}>modelo</Text>
          </View>

          <View style={styles.detailItem}>
            <Ionicons name="bed-outline" size={24} color="black" />
            <Text style={styles.detailText}>quartos</Text>
          </View>

          <View style={styles.detailItem}>
            <Ionicons name="resize-outline" size={24} color="black" />
            <Text style={styles.detailText}>Metros²</Text>
          </View>

          <View style={styles.detailItem}>
            <Ionicons name="water-outline" size={24} color="black" />
            <Text style={styles.detailText}>banheiro</Text>
          </View>

          <View style={styles.detailItem}>
            <Ionicons name="layers-outline" size={24} color="black" />
            <Text style={styles.detailText}>cômodos</Text>
          </View>
        </View>

        {/* Botões de Curtir, Comentar e Compartilhar */}
        <View style={styles.interactionSection}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="chatbubble-outline" size={24} color="black" />
            <Text style={styles.buttonText}>Comentar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="heart-outline" size={24} color="black" />
            <Text style={styles.buttonText}>Curtir</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="share-outline" size={24} color="black" />
            <Text style={styles.buttonText}>Compartilhar</Text>
          </TouchableOpacity>
        </View>

        {/* Footer Section */}
        <View style={styles.footer}>
          <View style={styles.profileGroup}>
            <Image
              source={require('./img/download.webp')}
              style={styles.profileGroupImage}
            />
          </View>
          <Text style={styles.footerText}>Visto por Elon_Fake e outras 300 pessoas</Text>
          <Text style={styles.responseText}>150 respostas</Text>
        </View>
      </ScrollView>

      {/* Navbar (Hotbar) */}
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
    backgroundColor: '#f2f2f2',
  },
  header: {
    padding: 20,
    backgroundColor: '#cccccc',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flexGrow: 1,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 5,
  },
  iconVerified: {
    marginLeft: 5,
  },
  detailsSection: {
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    marginBottom: 20,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  detailText: {
    fontSize: 18,
    marginLeft: 10,
  },
  interactionSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#ffffff',
    marginBottom: 20,
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    marginLeft: 5,
  },
  footer: {
    padding: 20,
    backgroundColor: '#e6e6e6',
    alignItems: 'center',
    marginBottom: 20,
  },
  footerText: {
    fontSize: 16,
    marginBottom: 10,
  },
  profileGroup: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  profileGroupImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 5,
  },
  responseText: {
    fontSize: 16,
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

export default App;
