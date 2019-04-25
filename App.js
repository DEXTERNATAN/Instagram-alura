import React, { Component } from "react";
import { Text, View, Image, Dimensions, FlatList, StyleSheet } from "react-native";

const width = Dimensions.get("screen").width;

export default class App extends Component {
  render() {
    const fotos = [{ id: 1, usuario: "rafael" }, { id: 2, usuario: "alberto" }, { id: 3, usuario: "victor" }];

    return (
      <View style={styles.container}>
        <FlatList
          data={fotos}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <View>
              <View style={styles.cabecalho}>
                <Image source={require("./resources/img/alura.jpg")} style={styles.fotoDePerfil} />
                <Text>{item.usuario}</Text>
              </View>
              <Image source={require("./resources/img/alura.jpg")} style={styles.foto} />
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  cabecalho: {
    margin: 10, 
    flexDirection: "row", 
    alignItens: "center"
  },
  fotoDePerfil: {
    borderRadius: 20, 
    width: 40, 
    height: 40
  },
  foto: {
    borderRadius: 20, 
    width: 40, 
    height: 40
  }
})