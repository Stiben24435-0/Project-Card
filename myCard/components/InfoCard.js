import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

export default function InfoCard({ user }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const themeStyles = isDarkMode ? styles.dark : styles.light;

  return (
    <View style={[styles.card, themeStyles.card]}>
      {}
      <TouchableOpacity onPress={toggleTheme} style={styles.themeButton}>
        <Ionicons
          name={isDarkMode ? 'moon' : 'sunny'}
          size={30}
          color={isDarkMode ? '#fff' : '#4CAF50'}
        />
      </TouchableOpacity>

      {}
      <View style={styles.cardContent}>
        {}
        <Image source={{ uri: user.imageUrl }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={[styles.name, themeStyles.text]}>{user.name}</Text>
          <Text style={[styles.university, themeStyles.text]}>
            University: Magic University of Pennsylvania
          </Text>
          <View style={styles.infoContainer}>
            <Text style={[styles.text, themeStyles.text]}>Age: {user.age}</Text>
            <Text style={[styles.text, themeStyles.text]}>Gender: {user.gender}</Text>
            <Text style={[styles.text, themeStyles.text]}>Program: {user.program}</Text>
            <Text style={[styles.text, themeStyles.text]}>Position: {user.position}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10, 
    overflow: 'hidden',
    flexDirection: 'row', 
    borderWidth: 4, 
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 130,
    height: 130,
    marginRight: 20, 
    borderRadius: 10,
    borderWidth: 4,
    borderColor: '#4CAF50',
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4CAF50',
  },
  university: {
    fontSize: 18,
    marginBottom: 10,
    color: '#555',
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  infoContainer: {
    marginTop: 10,
  },
  light: {
    card: {
      backgroundColor: '#fff',
      borderColor: '#000',  
    },
    text: {
      color: '#333',
    },
  },
  dark: {
    card: {
      backgroundColor: '#333',
      borderColor: '#fff',  
    },
    text: {
      color: '#fff',
    },
  },
  themeButton: {
    position: 'absolute',
    top: 20,
    right: 20,  
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 25,
  },
});
