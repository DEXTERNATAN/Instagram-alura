import React, {Component} from 'react';
import {Text, View, Image, Dimensions, FlatList} from 'react-native';

const width = Dimensions.get('screen').width;

export default class App extends Component {
  render() {
    
    const fotos = [
      {id: 1, usuario: 'rafael'},
      {id: 2, usuario: 'alberto'},
      {id: 3, usuario: 'victor'},
    ];

    return (
      <View style={{marginTop: 20}}>
        <FlatList
          data={fotos}
          keyExtractor={item => String(item.id)}
          renderItem= {({item}) => 
            <View>
              <Text>{item.usuario}</Text>
              <Image source={require('./resources/img/alura.jpg')} style={{width: width, height: width}} />      
            </View>
          }
        />
      </View>
    );
  }
}