import React from 'react'
import { View, Text, Button } from 'react-native'

const PathsScreen = ({ history }) => {
    return(
        <View>
            <Text>
                PathsScreen
            </Text>
            <Button title="Go back" onPress={() => history.push('/')}/>
        </View>
    )
}

export default PathsScreen