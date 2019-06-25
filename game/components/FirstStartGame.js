import React, { Component } from "react";
import { Button } from "react-native";
import SecondPlayGame from "./SecondPlayGame";

export default class FirstStartGame extends Component {
  static navigationOptions = {
    title: "Welcome"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() => navigate("SecondPlayGame", { screen: SecondPlayGame })}
      />
    );
  }
}
