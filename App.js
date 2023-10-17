import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Switch, SafeAreaView } from 'react-native'; 
import SwipeDeck  from './components/SwipeDeck';
import TeamSwitch from './components/TeamSwitch';
import Timer from './components/Timer';

export default function App() {
  return (

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

      <View style={styles.controlsContainer}>
        <TeamSwitch/>
        <Timer/>
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
  controlsContainer: {
    flex: .7,
    flexDirection: "column",
    backgroundColor: '#fff',
  },
  timerContainter: {
    
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
    flex: 0.1,
    backgroundColor: '#3bff4b',
    alignContent: "center",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,

  },
  sideBySideViews: {
    flex: .85,
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
