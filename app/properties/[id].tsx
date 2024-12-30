import React from 'react'
import {View, Text} from 'react-native'
import {useLocalSearchParams} from "expo-router";

const Property = () => {
    const {id} = useLocalSearchParams(); // automatically set up id search using react native's way
    return (
        <View>
            <Text>Property {id}</Text>
        </View>
    )
}
    export default Property;
