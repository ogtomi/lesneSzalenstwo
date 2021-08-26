import React from 'react'
import { View, Text, Button } from 'react-native'

const MapScreen = ({ history }) => {
    return(
        <View>
            <Text>
                MapScreen
            </Text>
            <Button title="Go back" onPress={() => history.push('/')}/>
        </View>
    )
}

export default MapScreen