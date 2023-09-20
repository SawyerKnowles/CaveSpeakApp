import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Switch } from 'react-native'; 
import SwipeDeck  from './components/SwipeDeck';

export default function App() {
  return (
    <View style={styles.container}>
      <SwipeDeck/> 
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent"
  },
  pointText: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent"
  },
});
