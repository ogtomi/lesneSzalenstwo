import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

const MainScreen = ({ history }) => {
    return (
        <View>
            <TouchableOpacity onPress={() => history.push("InfoScreen")}>
                <Text>
                    InfoScreen
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => history.push("MapScreen")}>
                <Text>
                    MapScreen
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => history.push("PathsScreen")}>
                <Text>
                    PathsScreen
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => history.push("ScanQrScreen")}>
                <Text>
                    ScanQrScreen
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default MainScreen