import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

const MainScreen = () => {
    return (
        <View>
            <TouchableOpacity onPress={() => console.log("click")}>
                <Text>
                    MainScreen
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default MainScreen