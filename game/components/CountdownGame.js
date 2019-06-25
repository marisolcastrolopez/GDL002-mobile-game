import React, { Component } from "react";
import CountDown from "react-native-countdown-component";
// import { StyleSheet, View, ScrollView } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome";

export default class CountdownGame extends Component {
  render() {
    return (
        <>
          <CountDown
            until={30}
            size={30}
            onFinish={() => alert("Finished")}
            digitStyle={{ backgroundColor: "#FFF" }}
            digitTxtStyle={{ color: "#1CC625" }}
            timeToShow={["S"]}
            timeLabels={{ s: "Seconds" }}
          />
          </>
    );
  }
}
