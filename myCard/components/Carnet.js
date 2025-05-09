import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Carnet() {
  const [reverso, setReverso] = useState(false);

  return (
    <View style={styles.container}>
      <View style={[styles.card, reverso && styles.reverso]}>
        {!reverso ? (
          <>
            <View style={styles.header}>
              <View style={styles.infoContainer}>
                <Text style={styles.nombre}>Pikachu gonzales pepes </Text>
                <Text style={styles.texto}>Matrícula: 1011591336</Text>
                <Text style={styles.texto}>Carrera: Ingeniería en Software</Text>
              </View>
              <Image source={require('../assets/foto.png')} style={styles.foto} />
            </View>
            <View style={styles.linea} />
            <Image source={require('../assets/qr.png')} style={styles.qr} />
          </>
        ) : (
          <View style={styles.reversoContainer}>
            <Text style={styles.validez}>Válido hasta: 17/03/2036</Text>
            <Text style={styles.texto}>Este carnet es personal e intransferible de Pikachu gonzales pepes si lo robas arceus te cornea.</Text>
          </View>
        )}
      </View>

      <TouchableOpacity style={styles.boton} onPress={() => setReverso(!reverso)}>
        <Text style={styles.botonTexto}>Girar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    width: 300,
    minHeight: 180, 
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 6,
    justifyContent: 'space-between',
  },
  
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  infoContainer: {
    flex: 1,
    paddingRight: 8,
  },
  nombre: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 2,
    textAlign: 'left',
  },
  texto: {
    fontSize: 12,
    textAlign: 'center', 
    fontFamily: 'monospace', 
  },
  foto: {
    width: 60,
    height: 60,
    borderRadius: 4, 
  },
  linea: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 8,
  },
  qr: {
    width: 60,
    height: 60,
    alignSelf: 'center',
  },
  reversoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 12,
    textAlign: 'center',
  },
  validez: {
    fontSize: 13,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    textAlign: 'center',
    marginBottom: 8,
  },
  boton: {
    marginTop: 20,
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: 12,
  },
  botonTexto: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});