import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        padding: 10,
        height: 100,
        borderBottomColor: 'red',
        borderBottomWidth: 5,
      },
    body: {
        justifyContent:'center',
        alignItems: 'center',
        flex:1,
    },
    footer:{
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        height: 100,
        borderTopWidth: 5,
        borderTopColor: 'red',
    },
    container: {
        flex:1,
    },
    textfooter: {
        fontSize: 40,
    },
    textbody: {
        fontSize: 40,
    },
    textheader: {
        fontSize: 40,
    }

})