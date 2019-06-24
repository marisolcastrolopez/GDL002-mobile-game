import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView
} from 'react-native';
 
export default class GridLayout extends Component {
  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
          <View style={styles.row}>
            <View style={[styles.box]}></View>
            <View style={[styles.box]}></View>
            <View style={[styles.box]}></View>
            <View style={[styles.box]}></View>
          </View>

          <View style={styles.row}>
            <View style={[styles.box]}></View>
            <View style={[styles.box]}></View>
            <View style={[styles.box]}></View>
            <View style={[styles.box]}></View>
          </View>

          <View style={styles.row}>
            <View style={[styles.box]}></View>
            <View style={[styles.box]}></View>
            <View style={[styles.box]}></View>
            <View style={[styles.box]}></View>
          </View>

          <View style={styles.row}>
            <View style={[styles.box]}></View>
            <View style={[styles.box]}></View>
            <View style={[styles.box]}></View>
            <View style={[styles.box]}></View>
          </View>
          </ScrollView>
      </View>
    );
  }
}
 
 
const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  box: {
    flex: 1,
    height: 100,
    backgroundColor: '#333',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  },
  box2: {
    backgroundColor: 'green'
  },
  box3: {
    backgroundColor: 'orange'
  },
  two: {
    flex: 2
  }
});
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
