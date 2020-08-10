import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: 
    {
        padding: 40,
        backgroundColor: '#8257e5'
    },

    topBar:
    {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    backIcon:
    {
        height: 40,
        width: 40
    },

    header:
    {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between"
    },

    title:
    {
        fontFamily: 'Archivo Bold',
        color: '#fff',
        fontSize: 24,
        lineHeight: 32,
        maxWidth: 200,
        marginVertical: 40
    },

});

export default styles;