import React, { Component } from "react";
import { Button } from "react-native";
import SecondShowFigure from "./SecondShowFigure";

export default class FirstStartGame extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Start Game"
        onPress={() => navigate("SecondShowFigure", { screen: SecondShowFigure })}
      />
    );
  }
}
