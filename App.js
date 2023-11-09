import React, { useState } from 'react';
import { View, TextInput, Button, ScrollView } from 'react-native';
import CardAtleta from './src/componentes/CardAtleta';
import PainelFavoritos from './src/componentes/PainelFavoritos';

export default function App() {
  const [nomeAtleta, setNomeAtleta] = useState('');
  const [resultados, setResultados] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  const handlePesquisa = async () => {
    if (nomeAtleta) {
      try {
        const response = await fetch(`https://footapi7.p.rapidapi.com/api/search/${nomeAtleta}`, {
          headers: {
            'X-RapidAPI-Key': '7fc3d4e3f8mshc865adde1093385p1d6aa3jsn77488a4e22a0',
            'X-RapidAPI-Host': 'footapi7.p.rapidapi.com',
          },
        });
        const data = await response.json();
        setResultados(data.results);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const adicionarAoFavorito = (atleta) => {
    setFavoritos([...favoritos, atleta]);
  };

  return (
    <View style = {{marginTop: '15%'}}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, }}
        placeholder="  Digite o nome do atleta"
        value={nomeAtleta}
        onChangeText={setNomeAtleta}
      />
      <Button title="Pesquisar" onPress={handlePesquisa} />
      <ScrollView>
        {resultados.map((atleta, index) => (
        <CardAtleta
          key={index}
          atleta={atleta.entity}
          onAdicionarFavorito={adicionarAoFavorito}
        />
        ))}
      </ScrollView>
      <PainelFavoritos favoritos={favoritos} />
    </View>
  );
}