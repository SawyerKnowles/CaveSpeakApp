import { View, Text, Switch, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const TeamSwitch = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style = {styles.switchContainer}>
            
            <Switch style={styles.switch}
                onValueChange={toggleSwitch}
                value={isEnabled}
                thumbColor={isEnabled ? 'red' : 'yellow'}
                trackColor={{ false: '#454545', true: '#454545'}}
                ios_backgroundColor="#454545"
            />
            <View style={styles.switchTextContainer}>
                <Text style={styles.switchText}>Team — </Text>
                {isEnabled ? <Text style={styles.switchTextTeam}>😡</Text> : <Text style={styles.switchTextTeam}>😁</Text>}
                
            </View>
            <View style={styles.buffer}></View>
            
        </View>
    )
}

export default TeamSwitch

const styles = StyleSheet.create({
    switch: {
        transform: [{scaleX: 1.2}, {scaleY: 1.2}],
        alignSelf: 'center'
    },
    switchContainer: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#e0e0e0',
    },
    switchTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1,
    },
    switchTextTeam: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    teamIconContainer: {
        backgroundColor: '#454545',
        borderRadius: 10
    },
    switchText: {
        fontSize: 30,
    },
    buffer: {
        flex: .2
    }
})