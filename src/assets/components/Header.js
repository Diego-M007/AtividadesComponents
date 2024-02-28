import { StyleSheet, Text, View, } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../estilos/styles';

export default function Header() {

return (
    <View style={styles.header}>

    <Text style={styles.textheader}>Header</Text>

    </View>
)

}