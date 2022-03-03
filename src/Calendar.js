import React, { Component } from 'react'
import { ImageBackground, View } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'


class Calendars extends Component {

    render() {
        return (
            <ImageBackground source={{uri : 'https://i.ibb.co/rcXW3XF/annie-spratt-8-M4gh-LBD-hk-unsplash.jpg'}} resizeMode="cover" style={{flex : 1, justifyContent : 'center'}}>
                <CalendarList
                    // Callback which gets executed when visible months change in scroll view. Default = undefined
                    onVisibleMonthsChange={(months) => {console.log('Bulan ', months);}}
                    // Max amount of months allowed to scroll to the past. Default = 50
                    pastScrollRange={50}
                    // Max amount of months allowed to scroll to the future. Default = 50
                    futureScrollRange={50}
                    // Enable or disable scrolling of calendar list
                    scrollEnabled={true}
                    // Enable or disable vertical scroll indicator. Default = false
                    showScrollIndicator={true}

                    theme = {{
                        textDayFontFamily : 'monospace',
                        todayTextColor : '#4ECB71',
                        textMonthFontWeight : 'bold',
                        textMonthFontSize : 20,
                        backgroundColor : 'transparent'
                    }}
                />
            </ImageBackground>
        )
    }
}

export { Calendars }