import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; // Alterei para o expo-router

const Profile = () => {
  const router = useRouter(); // Inicialização do router

  return (
    <View style={styles.container}>
      {/* Header with name and verified icon */}
      <View style={styles.header}>
        <Text style={styles.profileName}>Elon Musk</Text>
        <Ionicons name="checkmark-circle" size={18} color="blue" style={styles.verifiedIcon} />
      </View>

      {/* Main information section */}
      <View style={styles.infoSection}>
        <Text style={styles.location}>New York</Text>
        <Text style={styles.profileDescription}>
          Elon Reeve Musk{'\n'}
          Founder, CEO of SpaceX{'\n'}
          CEO of Tesla{'\n'}
          Founder and CEO of Neuralink{'\n'}
          President of SolarCity{'\n'}
          Owner of Twitter{'\n'}
          Vice-president of OpenAI
        </Text>
      </View>

      {/* Buttons (Follow, Message, Contacts) */}
      <View style={styles.buttonSection}>
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.buttonText}>Follow</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.messageButton}>
          <Text style={styles.buttonText}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactsButton}>
          <Text style={styles.buttonText}>Contacts</Text>
        </TouchableOpacity>
      </View>

      {/* Information icons */}
      <View style={styles.infoIcons}>
        <Ionicons name="text" size={24} color="black" />
        <Ionicons name="cash-outline" size={24} color="black" />
      </View>

      {/* Property details (Model, Rooms, Square Meters, etc.) */}
      <View style={styles.detailsSection}>
        <View style={styles.detailItem}>
          <Ionicons name="home-outline" size={24} color="black" />
          <Text style={styles.detailText}>Model</Text>
        </View>
        <View style={styles.detailItem}>
          <Ionicons name="bed-outline" size={24} color="black" />
          <Text style={styles.detailText}>Rooms</Text>
        </View>
        <View style={styles.detailItem}>
          <Ionicons name="resize-outline" size={24} color="black" />
          <Text style={styles.detailText}>Square Meters</Text>
        </View>
        <View style={styles.detailItem}>
          <Ionicons name="water-outline" size={24} color="black" />
          <Text style={styles.detailText}>Bathrooms</Text>
        </View>
        <View style={styles.detailItem}>
          <Ionicons name="layers-outline" size={24} color="black" />
          <Text style={styles.detailText}>Rooms</Text>
        </View>
      </View>

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
          <Ionicons name="person-circle" size={24} color="black" />
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  verifiedIcon: {
    marginLeft: 5,
  },
  infoSection: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  location: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginBottom: 10,
  },
  profileDescription: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  followButton: {
    backgroundColor: '#1DA1F2',
    padding: 10,
    borderRadius: 5,
  },
  messageButton: {
    backgroundColor: '#1DA1F2',
    padding: 10,
    borderRadius: 5,
  },
  contactsButton: {
    backgroundColor: '#1DA1F2',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  infoIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  detailsSection: {
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  detailText: {
    marginLeft: 10,
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

export default Profile;
