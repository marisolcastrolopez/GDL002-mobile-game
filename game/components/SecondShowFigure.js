import React, { Component } from "react";
import { Text, Button } from "react-native";
// import FiguresCountdown from "./FiguresCountdown";
import ThirdGameAction from "./ThirdGameAction";
import CountDown from "react-native-countdown-component";

export default class SecondShowFigure extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <>
        <Text>Game Explanation</Text>
        <CountDown
            until={5}
            size={30}
            onFinish={() => navigate("ThirdGameAction", { screen: ThirdGameAction })}
            digitStyle={{ backgroundColor: "#FFF" }}
            digitTxtStyle={{ color: "#1CC625" }}
            timeToShow={["S"]}
            timeLabels={{ s: "Seconds" }}
          />
        <Button
          title="Skip time"
          onPress={() => navigate("ThirdGameAction", { screen: ThirdGameAction })}
        />
      </>
    );
  }
}
