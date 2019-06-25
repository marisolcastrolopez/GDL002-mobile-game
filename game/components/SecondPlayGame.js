import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView, Button } from "react-native";
// import FiguresCountdown from "./FiguresCountdown";
import ThirdPlayGame from "./ThirdPlayGame";

export default class SecondPlayGame extends Component {
  static navigationOptions = {
    title: "Welcome"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <>
        <Text>Game Explanation</Text>
        <Button
          title="Skip time"
          onPress={() => navigate("ThirdPlayGame", { screen: ThirdPlayGame })}
        />
      </>
    );
  }
}
