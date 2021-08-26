import React from 'react'
import { View, Text, Button } from 'react-native'

const AlertScreen = ({ history }) => {
    return(
        <View>
            <Text>
                Alert
            </Text>
            <Button title="Go back" onPress={() => history.push('/')}/>
        </View>
    )
}

export default AlertScreen