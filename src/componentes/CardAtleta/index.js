import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

const CardAtleta = ({ atleta, onAdicionarFavorito }) => (
  <View>
    <Text style = {styles.txt1Style}>{`Nome: ${atleta.name}`}</Text>
    <Text style = {styles.txtStyle}>{`País: ${atleta.country.name}`}</Text>
    <Text style = {styles.txt1Style}>{`Gênero: ${atleta.gender}`}</Text>
    <Button title="Adicionar aos Favoritos" onPress={() => onAdicionarFavorito(atleta)} />
  </View>
);

export default CardAtleta;

const styles = StyleSheet.create({
  txt1Style:{
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 8,
    
  },
  txtStyle: {
    fontSize: 13,
    fontWeight: 'bold',
  }



})