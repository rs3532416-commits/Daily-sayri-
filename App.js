import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

const sayris = [
  "Teri yaad ka mausam, har pal suhana lage,\nTere bina zindagi, adhuri si lagana lage.",
  "Chand se roshan ho zindagi tumhari,\nHar khushi tumhare kadam chume.",
  "Mohabbat bhi zaruri thi, bichadna bhi zaruri tha,\nTumhe yaad rakhna bhi zaruri tha, tumhe bhulana bhi zaruri tha.",
  "Dil se jo baat nikalti hai, asar rakhti hai,\nPar nahi taqat-e-parwaz magar rakhti hai.",
  "Kuch pal ke liye sahi, tum mere ho jao,\nYe zindagi tumhare naam kar jao."
];

export default function App() {
  const [sayri, setSayri] = useState(sayris[0]);

  const newSayri = () => {
    const random = Math.floor(Math.random() * sayris.length);
    setSayri(sayris[random]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Sayri</Text>
      <ScrollView style={styles.box}>
        <Text style={styles.sayri}>{sayri}</Text>
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={newSayri}>
        <Text style={styles.buttonText}>Nayi Sayri</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFEFF7', alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#E91E63', marginBottom: 20 },
  box: { backgroundColor: 'white', borderRadius: 15, padding: 20, width: '100%', minHeight: 150, marginBottom: 20 },
  sayri: { fontSize: 18, textAlign: 'center', lineHeight: 28, color: '#333' },
  button: { backgroundColor: '#E91E63', padding: 15, borderRadius: 10, width: '80%' },
  buttonText: { color: 'white', textAlign: 'center', fontSize: 18, fontWeight: 'bold' }
});
