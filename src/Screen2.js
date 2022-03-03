import React, { Component } from 'react'
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../assets/styling'

class ScreenTwo extends Component {

    render() {
        return (
        <View style={{flex : 1}}>
            <ImageBackground source={{uri : 'https://i.ibb.co/rcXW3XF/annie-spratt-8-M4gh-LBD-hk-unsplash.jpg'}} resizeMode="cover" style={{flex : 1, justifyContent : 'center'}}>
                <View style={styles.accoBoxBody}>
                    <View style={styles.viewBoxBody}>
                        <View style={styles.box}>
                            <Image 
                                style={{marginBottom : 50,width : 120, height : 120, alignSelf : 'center'}}
                                source={{uri : 'https://i.ibb.co/KWmBngn/islam1.png'}}
                            />
                        </View>
                        <View style={styles.box}>
                        <TouchableOpacity 
                        style={{borderWidth : 2, borderColor : '#FFF',backgroundColor : '#4ECB71',paddingLeft : 50, paddingRight : 50, paddingTop : 15, paddingBottom : 15, borderRadius : 10}}
                        onPress={() => {
                            this.props.navigation.navigate('Home')
                        }}
                        >
                            <Text style={{textAlign : 'center', color : '#FFF'}}>Lihat Jadwal</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.accoBoxFooter}>
                    <View style={styles.viewBoxFooter}>
                        <TouchableOpacity style={{backgroundColor : '#4ECB71',borderWidth : 2, borderColor : '#FFF',paddingLeft : 30, paddingRight : 30, paddingTop : 10, paddingBottom : 10, borderRadius : 10, marginEnd : 15}}>
                            <Text style={{textAlign : 'center', color : '#FFF', fontSize : 10}}>Privacy Policy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor : '#4ECB71',borderWidth : 2, borderColor : '#FFF',paddingLeft : 30, paddingRight : 30, paddingTop : 10, paddingBottom : 10, borderRadius : 10, marginStart : 15}}>
                            <Text style={{textAlign : 'center', color : '#FFF', fontSize : 10}}>Varsion 0.1</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
        )
    }
}

export { ScreenTwo }
