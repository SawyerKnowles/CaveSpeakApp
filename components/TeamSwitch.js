import { View, Text, Switch } from 'react-native'
import React, { useState } from 'react'

const TeamSwitch = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View>
            <Switch
                onValueChange={toggleSwitch}
                value={isEnabled}
                thumbColor={isEnabled ? '#fff' : 'red'}
                trackColor={{ false: '#fff', true: 'blue'}}
                ios_backgroundColor="black"
            />
            {isEnabled ? <Text>Enabled</Text> : <Text>Disabled</Text>}
        </View>
    )
}

export default TeamSwitch