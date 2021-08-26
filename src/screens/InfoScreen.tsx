import React from 'react'
import { View, Text, Button } from 'react-native'

const InfoScreen = ({ history }) => {
    return(
        <View>
            <Text>
                InfoScreen
            </Text>
            <Button title="Go back" onPress={() => history.push('/')}/>
        </View>
    )
}

export default InfoScreen