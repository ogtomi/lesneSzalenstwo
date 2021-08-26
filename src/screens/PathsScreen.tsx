import React from 'react'
import { View, Text, Button } from 'react-native'

const PathsScreen = ({ history }) => {
    return(
        <View>
            <Text>
                PathsScreen
            </Text>
            <Button title="RestScreen" onPress={() => history.push('RestScreen')}/>
        </View>
    )
}

export default PathsScreen