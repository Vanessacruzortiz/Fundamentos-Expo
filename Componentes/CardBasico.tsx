import { View, StyleSheet, Text, Image } from "react-native";
 import CardImagen from "./CardImagen";  
 export default function CardBasico() {

     return (
        
         <View style={Styles.card}>
              <Text  style={Styles.Titulo}>Me gusta el ramen</Text>
              <Text  style={Styles.Contenido}> ¿Que es el ramen? </Text>
         </View>
        


     );
 }
 const Styles = StyleSheet.create({ 
     card:{
         backgroundColor: '#bae2fdff',
         borderRadius: 8,
         padding: 16,
         shadowColor:'#000',
         elevation:4,
         shadowOpacity:0.5,
         shadowRadius:4,
         },
     Titulo:{
         fontSize:14,
         fontWeight:'bold',
     },
     Contenido:{
         marginTop:6,
         textAlign:'justify'

     },
 });
