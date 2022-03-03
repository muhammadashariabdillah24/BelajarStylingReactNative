import React, { Component } from 'react'
import { Text, View, ImageBackground, ScrollView, SafeAreaView, Modal, ActivityIndicator, Alert } from 'react-native'
import { styles } from '../assets/styling'
import { DataTable } from 'react-native-paper'

class ScreenOne extends Component {

    constructor(props){
        super(props)

        this.state = {

            // All Data From Api
            Data : [],
            header : [],
            // All Data From Page
            page : 0,
            perPage : 2,
        }
    }

    setBackgroundColor = (x) => {

        let setColor = null
        
        if(x % 2 == 0){
            
            setColor = {backgroundColor : '#4ECB71', opacity : 0.6}

        } else if(x % 2 == 1){

            setColor = {backgroundColor : '#faf0e6', opacity : 0.6}
    
        }

        return setColor
    }

    setColor = (x) => {
        
        let thisDay = new Date();
        console.log(thisDay.getDate());
        let accColor = null
        if(x == thisDay.getDate()){

            accColor = {color : '#dc143c', fontWeight : 'bold'}
        } else {
            accColor;
        }

        return accColor;
    }

    componentDidMount(){
        
        getApi = ({latitude, longitude, method, month, years}) => {

            return fetch(`http://api.aladhan.com/v1/calendar?latitude=${latitude}&longitude=${longitude}&method=${method}&month=${month}&year=${years}`, {
                method : 'GET'
            })
            .then((response) => response.json())
            .then((responseJson) => {
    
                // For Header
                let accArray = []
    
                Object.keys(responseJson.data[0].timings).filter(value => {
    
                    if(value.includes('Fajr') || value.includes('Dhuhr') || value.includes('Asr') || value.includes('Maghrib') || value.includes('Isha')){
                        accArray.push(value)
                    }
                })

                let sholat = ['Tanggal','Subuh','Dzuhur','Ashar','Maghrib','Isya']

                accArray.splice(0, 5, sholat)

                console.log(accArray[0]);
                // --

                this.setState({
                    Data : responseJson.data,
                    header : accArray[0]
                })
    
            })
            .catch((err) => {
                console.log(err);
            })
    
        }
        

        const DataObj = {
            
            latitude : '-7.797068',
            longitude : '110.370529',
            method : 4,
            month : 9,
            years : 2021

        }

        getApi(DataObj)
    }

    render() {

        return (
        <View style={{flex : 1}}>
            <ImageBackground source={{uri : 'https://i.ibb.co/vzMFP7S/Background-Whatsapp.png'}} resizeMode="cover" style={{flex : 1, justifyContent : 'center'}}>
                <View style={styles.viewBoxMain}>
                <View style={{justifyContent : 'center', flexDirection : 'row'}}>
                </View>
                    <View style={{justifyContent : 'center', flexDirection : 'row', marginBottom : 20}}>
                        <Text style={{textAlign : 'center', textDecorationLine : 'underline', textDecorationStyle : 'solid' ,fontSize : 30, textShadowColor : '#FFF', textShadowOffset : {width : 1, height : 4}, color : '#4ECB71' ,opacity : 0.6, textShadowRadius : 10}}>Jadwal Sholat</Text>
                    </View>
                        <DataTable>
                                <DataTable.Header style={styles.headerStyle}>
                                    <DataTable.Title><Text style={styles.titleStyle}>{this.state.header[0]}</Text></DataTable.Title>
                                    <DataTable.Title><Text style={styles.titleStyle}>{this.state.header[1]}</Text></DataTable.Title>
                                    <DataTable.Title><Text style={styles.titleStyle}>{this.state.header[2]}</Text></DataTable.Title>
                                    <DataTable.Title><Text style={styles.titleStyle}>{this.state.header[3]}</Text></DataTable.Title>
                                    <DataTable.Title><Text style={styles.titleStyle}>{this.state.header[4]}</Text></DataTable.Title>
                                    <DataTable.Title><Text style={styles.titleStyle}>{this.state.header[5]}</Text></DataTable.Title>
                                </DataTable.Header>

                            <SafeAreaView style={{maxHeight : 500}}>
                                <ScrollView>
                            {this.state.Data

                            .map((value, index) => (
                                    <DataTable.Row key={index} style={this.setBackgroundColor(index)}>
                                        <DataTable.Cell style={{marginRight : 5}}><Text style={[styles.cellStyle, this.setColor(index+1)]}>{index+1}</Text></DataTable.Cell>
                                        <DataTable.Cell style={{marginRight : 5}}><Text style={[styles.cellStyle, this.setColor(index+1)]}>{value.timings.Fajr}</Text></DataTable.Cell>
                                        <DataTable.Cell style={{marginRight : 5}}><Text style={[styles.cellStyle, this.setColor(index+1)]}>{value.timings.Dhuhr}</Text></DataTable.Cell>
                                        <DataTable.Cell style={{marginRight : 5}}><Text style={[styles.cellStyle, this.setColor(index+1)]}>{value.timings.Asr}</Text></DataTable.Cell>
                                        <DataTable.Cell style={{marginRight : 5}}><Text style={[styles.cellStyle, this.setColor(index+1)]}>{value.timings.Maghrib}</Text></DataTable.Cell>
                                        <DataTable.Cell style={{marginRight : 5}}><Text style={[styles.cellStyle, this.setColor(index+1)]}>{value.timings.Isha}</Text></DataTable.Cell>
                                    </DataTable.Row>
                                ))}
                                </ScrollView>
                            </SafeAreaView>
                        </DataTable>
                </View>
            </ImageBackground>
        </View>
        )
    }
}

export {ScreenOne}