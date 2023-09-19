import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Switch } from 'react-native';
import Swiper, { SwiperProps } from 'react-native-deck-swiper';

export default function App() {
  return (
    <View style={styles.container}>

      <Swiper
            cards={['Quiz\n-----\nPop Quiz', 'Lunch\n-----\nLunch Lady', 'Talk\n-----\nTalk Radio', 'Menu\n-----\nBreakfast Menu', 'Spill\n-----\nSpilled Milk', 'Chocolate\n-----\Chocolate Milk', 'Bee\n-----\nBee Sting']}
            renderCard={(card) => {
                return (
                    <View style={styles.card}>
                        <Text style={styles.text}>{card}</Text>
                    </View>
                )
            }}
            onSwiped={(cardIndex) => {console.log(cardIndex)}}
            showSecondCard = {false}
            onSwipedAll={() => {console.log('onSwipedAll')}}
            cardIndex={0}
            backgroundColor={'#4FD0E9'}
            stackSize= {3}>
            <Button
                onPress={() => {console.log('oulala')}}
                title="Press me">
                You can press me
            </Button>
        </Swiper>
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
  card: {
    flex: 0.5,
    borderRadius: 50,
    borderWidth: 15,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white",
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
