import { StyleSheet, Text, View } from 'react-native'; 
import Swiper, { SwiperProps } from 'react-native-deck-swiper';

function SwipeDeck()  {
    return (
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
            disableBottomSwipe = {true}
            onSwipedAll={() => {console.log('onSwipedAll')}}
            cardIndex={0}
            backgroundColor={'#4FD0E9'}
            stackSize= {3}>
        </Swiper>
    );
};

export default SwipeDeck;

const styles = StyleSheet.create({
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
})