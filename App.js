import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Post } from '../Instagram-alura/components/Post';


export default class App extends Component {
  render() {
    const fotos = [{ id: 1, usuario: "rafael" }, { id: 2, usuario: "alberto" }, { id: 3, usuario: "victor" }];

    return (
      <View style={styles.container}>
        <FlatList
          data={fotos}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Post foto={item} />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }
})