import React, { Component } from "react";
import { Text, View, Image, Dimensions, FlatList } from "react-native";

const width = Dimensions.get("screen").width;

export default class App extends Component {
  render() {
    const fotos = [{ id: 1, usuario: "rafael" }, { id: 2, usuario: "alberto" }, { id: 3, usuario: "victor" }];

    return (
      <View style={{ marginTop: 20 }}>
        <FlatList
          data={fotos}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <View>
              <View style={{ margin: 10, flexDirection: "row", alignItens: "center" }}>
                <Image source={require("./resources/img/alura.jpg")} style={{ borderRadius: 20, width: 40, height: 40 }} />
                <Text>{item.usuario}</Text>
              </View>
              <Image source={require("./resources/img/alura.jpg")} style={{ borderRadius: 20, width: 40, height: 40 }} />
            </View>
          )}
        />
      </View>
    );
  }
}

