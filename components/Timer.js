import { Animated, View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

const Progress = ({step, steps, height}) => {
    const [width, setWidth] = React.useState(0)
    const animatedValue = React.useRef(new Animated.Value(-1000)).current;
    const reactive = React.useRef(new Animated.Value(-1000)).current;

    React.useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: reactive,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, []);

    React.useEffect(() => {
        reactive.setValue(-width + (width * step) / steps);
    }, [step, width])

    return (
        <>
            <Text>{step}/{steps}</Text>
            <View 
                onLayout={e => {
                    const newWidth = e.nativeEvent.layout.width;
                    setWidth(newWidth);
                }}
                style = {{
                height,
                backgroundColor: 'rgba(0,0,0,0.1)',
                borderRadius: height,
                overflow: 'hidden',
                }}
            >
                <Animated.View style = {{
                    height,
                    width: '100%',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    borderRadius: height,
                    transform: [{
                        translateX: animatedValue,
                    }]
                    }}
                >

                </Animated.View>
            </View>
        </>
    );
};

const Timer = () => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setIndex((index + 1) % (10 + 1));
        }, 1000);

        return () => {
            clearInterval(interval);
        };

    }, [index]);

    return (
        <View style = {styles.timerContainter}>
            <StatusBar hidden/>
            <Progress step={index} steps={10} height={20}></Progress>
        </View>
    )
}

export default Timer

const styles = StyleSheet.create({
    timerContainter: {
        backgroundColor: 'green',
        justifyContent: 'center',
        padding: 20
    },
})