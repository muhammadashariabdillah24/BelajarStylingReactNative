import React, {Component} from 'react'
import { 
    View,
    Text,
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView
} from 'react-native'
import { DataTable, Avatar, Appbar } from 'react-native-paper'

class Fridaypreacher extends Component {

    constructor(props){
        super(props)

        function Parent(){

            this.peopleName = 
            
                [
                    [
                                
                    {
                        name : 'Abyan',
                        stat : 'Santri Junior',
                        image : 'https://i.ibb.co/vzMFP7S/Background-Whatsapp.png'
                    },
        
                    {
                        name : 'Hafiz',
                        stat : 'Santri Junior',
                        image : 'https://i.ibb.co/vzMFP7S/Background-Whatsapp.png'
                    },
        
                    {
                        name : 'Izzat',
                        stat : 'Santri Junior',
                        image : 'https://i.ibb.co/vzMFP7S/Background-Whatsapp.png'
                    },
        
                    {
                        name : 'Putra',
                        stat : 'Santri Senior',
                        image : 'https://i.ibb.co/vzMFP7S/Background-Whatsapp.png'
                    },
        
                    {
                        name : 'Muhammad Afif',
                        stat : 'Santri Junior',
                        image : 'https://i.ibb.co/vzMFP7S/Background-Whatsapp.png'
                    },
        
                    {
                        name : 'Said',
                        stat : 'Santri Junior',
                        image : 'https://i.ibb.co/vzMFP7S/Background-Whatsapp.png'
                    },
        
                    {
                        name : 'M. N Afif',
                        stat : 'Santri Junior',
                        image : 'https://i.ibb.co/vzMFP7S/Background-Whatsapp.png'
                    },

                    {
                        name : 'Mas Latami',
                        stat : 'Musyrif',
                        image : 'https://i.ibb.co/vzMFP7S/Background-Whatsapp.png'
                    },

                    {
                        name : 'Sholeh',
                        stat : 'Santri Junior',
                        image : 'https://i.ibb.co/vzMFP7S/Background-Whatsapp.png'
                    },

                    {
                        name : 'Tabir',
                        stat : 'Santri Junior',
                        image : 'https://i.ibb.co/vzMFP7S/Background-Whatsapp.png'
                    },

                    {
                        name : 'Zaki',
                        stat : 'Santri Junior',
                        image : 'https://i.ibb.co/vzMFP7S/Background-Whatsapp.png'
                    },

                    {
                        name : 'Mas Jujun',
                        stat : 'Mentor',
                        image : 'https://i.ibb.co/vzMFP7S/Background-Whatsapp.png'
                    }
            
                ]
            ]
        }

        this.state = {

            thisParent : new Parent().peopleName[0],
            accDay : 4
        }

    }

        getDateFriday(){

            let thisDay = new Date().getHours()

            if (thisDay === 24) {

                if(this.state.accDay === 11){

                    this.setState({
                        accDay : 0
                    })
                }

                this.state.accDay+=1
                
            }

            return(

                    <View>                               
                        <Image 
                            source={{uri : this.state.thisParent[this.state.accDay].image}}
                            style={{height : 100, width : 100}}
                        />
                        <Text style={{textAlign : 'center'}}>{this.state.thisParent[this.state.accDay].name}</Text>
                    </View> 

            )


            // let thisDay = new Date()
            // let accDay = thisDay.getDay()

            // for (let i = 0; i < this.state.thisParent.length; i++) {
                
            //     if(i === 6){

            //         i = 0
            //     }

            //     if(i === accDay){

            //         return(

            //             <View>                               
            //                 <Image 
            //                 source={{uri : this.state.thisParent[i].image}}
            //                 style={{height : 100, width : 100}}
            //                 />
            //                 <Text style={{textAlign : 'center'}}>{this.state.thisParent[i].name}</Text>
            //             </View> 

            //         )
            //     }
            // }
        }

        componentDidMount(){

            console.log(
                this.state.thisParent
            );
        }

        setColor = (x) => {


            // Accomodate Background Color In DataTable
            let accColor = null

            // for (let i = 0; i <= this.state.thisParent.length++;i++) {

                // Logic For Backround Color In DataTable
                    if(x == this.state.accDay){
                
                        accColor = {color : '#dc143c', fontWeight : 'bold'}
                    } else {
                        accColor = {color : '#000'}
                    }
                            
                    console.log(accColor);
                    return accColor

            // }
        }

        setBackgroundColor = (x) => {


            
            // Accomodate Color Text In DataTable
                let setColor = null
            
                // Logic For Text In DataTable
                if(x % 2 == 0){
                                            
                    setColor = {backgroundColor : '#4ECB71', opacity : 0.6}
                                    
                } else if(x % 2 == 1){
                                    
                    setColor = {backgroundColor : '#faf0e6', opacity : 0.6}
                                        
                }
            
                    return setColor
        }


    render() {

        return (
            
            <View style={{flex : 1}}>
                <Appbar.Header style={{backgroundColor : '#4ECB71'}}>
                    <Appbar.Content titleStyle={{color : '#FFF'}} title="Friday Schedule"/>
                    <Appbar.Action color="#FFF" icon="magnify" onPress={''} />
                    <Appbar.Action color="#FFF" icon="dots-vertical" onPress={''} />
                </Appbar.Header>
                <View style={{flex : 2,flexDirection : 'row', justifyContent : 'center'}}>
                    <View style={{flexDirection : 'column', justifyContent : 'flex-start',backgroundColor : '#555', alignSelf : 'center'}}>
                        {this.getDateFriday()}
                    </View>
                </View>
                <View style={{flex : 5, flexDirection: 'row', justifyContent: 'center'}}>
                        <DataTable>
                            <DataTable.Header style={{margin : 10,borderBottomColor : '#f8f8ff',backgroundColor : '#4ECB71',opacity : 0.9}}>
                                <DataTable.Title><Text style={{color : '#FFF'}}>No</Text></DataTable.Title>
                                <DataTable.Title><Text style={{color : '#FFF'}}>Status</Text></DataTable.Title>
                                <DataTable.Title><Text style={{color : '#FFF'}}>Nama</Text></DataTable.Title>
                            </DataTable.Header>

                            <SafeAreaView style={{margin : 10, maxHeight : 350}}>
                                <ScrollView>
                                {
                                    this.state.thisParent.map((value, index) => (
                                        
                                        <DataTable.Row key={index} style={this.setBackgroundColor(index)}>
                                            <DataTable.Cell><Text style={this.setColor(index)}>{index+1}</Text></DataTable.Cell>
                                            <DataTable.Cell><Text style={this.setColor(index)}>{value.stat}</Text></DataTable.Cell>
                                            <DataTable.Cell><Text style={this.setColor(index)}>{value.name}</Text></DataTable.Cell>
                                        </DataTable.Row>

                                    ))
                                }
                                </ScrollView>
                            </SafeAreaView>

                        </DataTable>
                </View>
            </View>
            

        )
    }
}

export { Fridaypreacher }