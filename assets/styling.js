import { 
    Text,
    StyleSheet,
    ImageBackground
} from "react-native";

const styles = StyleSheet.create({

    containerFrame : {
        padding : 10,
        backgroundColor : '#f0f8ff',
        flex : 1
    },
    //Start Layout Only
    accoBoxHeader : {
        backgroundColor : '#ff00ff',
        flex : 1,
        justifyContent : 'center',
        flexDirection : 'row',
        flexWrap : 'wrap',
        margin : 5
    },
    accoBoxMain : {
        backgroundColor : '#ffd700',
        flex : 1,
        justifyContent : 'flex-start',
        flexDirection : 'column',
        flexWrap : 'wrap',
        margin : 5
    },
    accoBoxBody : {
        flex : 1,
        justifyContent : 'center',
        flexDirection : 'row',
        flexWrap : 'wrap',
        margin : 5
    },
    accoBoxFooter : {
        backgroundColor : 'transparent',
        // flex : 1,
        justifyContent : 'center',
        flexDirection : 'row',
        flexWrap : 'wrap',
        margin : 5,
        height : 100
    },
    viewBoxHeader : {
        backgroundColor : '#dc143c',
        justifyContent : 'center',
        flexDirection : 'row',
        margin : 10,
        flexWrap : 'wrap',
        borderRadius : 5
    },
    viewBoxMain : {
        backgroundColor : 'transparent',
        justifyContent : 'center',
        flexDirection : 'row',
        flexWrap : 'wrap',
        borderRadius : 5,
        margin : 10,
    },
    viewBoxBody : {
        backgroundColor : 'transparent',
        justifyContent : 'center',
        flexDirection : 'column',
        margin : 10,
        padding : 50,
        flexWrap : 'wrap',
        borderRadius : 5

    },
    viewBoxFooter : {
        backgroundColor : 'transparent',
        justifyContent : 'flex-start',
        flexDirection : 'row',
        flexWrap : 'wrap',
        borderRadius : 5,
    },
    headerStyle : {
        borderBottomColor : '#fff',
        backgroundColor : '#4ECB71',
        opacity : 0.9,
        marginBottom : 10
    },
    titleStyle : {
        fontSize : 10,
        fontWeight : '400',
        color : '#fff'
    },
    cellStyle : {
        fontSize : 8,
        padding : 0
    },
    box : {
        margin : 5,
    },
    littleBox : {
        height : 10,
        width : 10,
        margin : 5
    },
    box1 : {
        backgroundColor : 'darkorange',
    },
    childBox1 : {
        flexDirection : 'row',
        justifyContent : 'center'
    },
    littleBox1 : {
        backgroundColor : 'deepskyblue'
    },
    box2 : {
        backgroundColor : 'darkorchid',

    },
    childBox2 : {

    },
    box3 : {
        backgroundColor : 'darksalmon',
    },
    childBox3 : {

    }


})

export {styles}