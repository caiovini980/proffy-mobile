import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: '#f0f0f7'
    },

    filter:
    {
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },

    teacherList:
    {
        marginTop: -40,
    },

    searchForm:
    {
        marginBottom: 20,
    },

    label:
    {
        color: '#d4c2ff',
        fontFamily: 'Poppins Regular',
    },

    input:
    {
        height: 54,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16,
    },

    inputGroup:
    {
        flexDirection: "row",
        justifyContent: 'space-between',
    },

    inputBlock:
    {
        width: '48%',
    },

    submitButton:
    {
        backgroundColor: '#04d361',
        flexDirection: 'row',
        height: 56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },

    submitButtonText:
    {
        color: '#fff',
        fontFamily: 'Archivo Bold',
        fontSize: 16,
    }
})

export default styles;