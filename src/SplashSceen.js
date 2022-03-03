import React, { Component } from 'react'
import { 
    View
} from 'react-native'
import LottieView from 'lottie-react-native'


class SplashScreen extends Component {

    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.replace('Selamat Datang')
         }, 3000)
    }
    

    render() {

        return (
            <View style={{flex : 1, flexDirection : 'row', justifyContent : 'center', backgroundColor : '#FFFFFF'}}>
                <View style={{justifyContent : 'center', flexDirection : 'column'}}>
                    <LottieView 
                        source={require('../assets/lf30_editor_nhp3fwcf.json')}
                        style={{width : 300, height : 300}}
                        autoPlay
                        loop
                        // progress={this.state.progress}
                    />
                </View>
            </View>
        )
    }
}

export { SplashScreen }