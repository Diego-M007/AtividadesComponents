import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, ImageBackground } from 'react-native';
import Header from './src/assets/components/Header';
import Body from './src/assets/components/Body';
import Footer from './src/assets/components/Footer';
import { styles } from './src/assets/estilos/styles';

export default function App() {
  return (
    <View style={ styles.container}>
      <Header /> 
      {/* Componente Cabeçalho */}
      <Body />
      {/* Componente Corpo */}
      <Footer /> 
      {/* Componente Rodapé */}
 </View>
  );
}
