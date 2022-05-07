import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ProgressBar } from 'react-native-paper';

class SplashScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            progress: 0.0
        }
    }

    getRandomTime(time) {
        if (!time) {
            time = 200;
        }
        return Math.ceil(Math.random() * time)
    }

    setProgress(value) {

        if(this.state.progress > 0.9){
            this.setState({
                progress: 1.0
            })
        }

        if (!value) {
            value = Math.random()
            value = value > 0.2 ? value / 10 : value
        }
        if (value != 1.0 && this.state.progress + value >= 1.0) {
            return;
        }
        this.setState({
            progress: value > 0.9 ? 1.0 : this.state.progress + value
        });
    }

    getProgress = () => {
        if (this.state.progress === 1.0) {
            this.props.navigation.replace('DashBoard')
        }
        else if (this.state.progress !== 1.0) {
            let randomTime = this.getRandomTime()
            setTimeout(() => {
                this.setProgress()
            }, randomTime);
            return this.state.progress
        }
        
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>SplashScreen</Text>
                <ProgressBar progress={this.getProgress()} color={'#9F84C2'} style={styles.progessBar} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    progessBar: {
        height: 4,
        width: 106,
        borderRadius: 2
    }
})

export default SplashScreen;