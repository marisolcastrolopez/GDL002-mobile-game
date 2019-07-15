import React, { Component } from "react";
// import { StyleSheet, View, ScrollView } from "react-native";
import Router from './components/Router';

export default class App extends Component {
  state = {
    count: 0,
  }
  render() {
    return (
        <Router count={this.state.count}/>

    );
  }
}
