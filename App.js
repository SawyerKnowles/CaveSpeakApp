import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Switch, SafeAreaView } from 'react-native'; 
import SwipeDeck  from './components/SwipeDeck';

export default function App() {
  return (
  /*
    <SafeAreaView style={{ flex:1, backgroundColor: 'black' }} >
      <View style={styles.container}>
        <View style={styles.swipeContainer}> 
          <SwipeDeck/> 
        </View>
        <View style={styles.label}>
          <Text style={styles.text}>Team:</Text>
        </View>
      </View>
    </SafeAreaView>
    */
   
    <SafeAreaView style={{ flex:1, backgroundColor: 'black' }}>
      <View style={styles.scoreContainer}>
        <View style={styles.greenView}>
          <Text style={styles.pointText}>+3</Text>
        </View>
        <View style={styles.sideBySideViews}>
          <View style={styles.redView}>
            <Text style={styles.pointText}>-1</Text>
          </View>
          <View style={styles.yellowView}>
            <Text style={styles.pointText}>+1</Text>
          </View>
        </View>
        <SwipeDeck/>
      </View>
    </SafeAreaView>
    
    
    
    
    
  );
}


const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
  },
  swipeContainer: {
    flex: 0.65,
  },
  labelContainer: {
    flex: 1,
    backgroundColor: "red",
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent",
    flexWrap: "wrap"
  },
  pointText: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    backgroundColor: "transparent"
  },
  scoreContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#454545',
  },
  greenView: {
    flex: 0.05,
    backgroundColor: '#3bff4b',
    alignContent: "center",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,

  },
  sideBySideViews: {
    flex: .5,
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  redView: {
    flex: .1,
    backgroundColor: '#ff4b3b',
    alignContent: "flex-end",
    justifyContent: "center",
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
  yellowView: {
    flex: .1,
    backgroundColor: '#ffe83b',
    alignContent: "flex-end",
    justifyContent: "center",
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
  

});
