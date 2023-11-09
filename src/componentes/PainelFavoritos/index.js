import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const PainelFavoritos = ({ favoritos }) => (
  <ScrollView style = {style.painelStyle}>
    <Text style = {style.tituloFavStyle}>Atletas Favoritos</Text>
    {favoritos.map((atleta) => (
      <View key={atleta.id}>
        <Text style = {style.txt1FavStyle}>{atleta.name}</Text>
        <Text style = {style.txtFavStyle}>{`País: ${atleta.country.name}`}</Text>
        <Text style = {style.txtFavStyle}>{`Gênero: ${atleta.gender}`}</Text>
      </View>
    ))}
  </ScrollView>
);

const style = StyleSheet.create({
  painelStyle: {
    position: 'absolute',
    marginTop: '115%',
    marginHorizontal: '10%',
    padding: 5,
    borderRadius: 10,
    width: '80%',
    height: '300%',
    backgroundColor: '#888888',
  },

  tituloFavStyle: {
    position: 'relative',
    color: '#fff',
    textAlign: 'center',
    fontSize: 23,
    fontWeight: 'bold',
  },

  txt1FavStyle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 15,
  },
  txtFavStyle: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },

})

export default PainelFavoritos;
