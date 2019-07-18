import React, { Component } from "react";
// import { StyleSheet, View, ScrollView } from "react-native";
import Router from './components/Router';
import GameSpa from './components/GameSpa/GameSpa'

export default class App extends Component {
  render() {
    return (
        // <Router/>
        <GameSpa/>
    );
  }
}
