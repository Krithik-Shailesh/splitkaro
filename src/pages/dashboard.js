import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ProgressBar } from 'react-native-paper';

class DashBoard extends Component {

    render(){
        return(
            <View>
                <Text>DashBoard</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default DashBoard;
