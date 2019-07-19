import React, { Component, Fragment } from "react";
import { Button, StyleSheet, View, Animated, Easing } from "react-native";
// import MemorizeScreen from "../ui02memorize/MemorizeScreen";
// import Icon from "react-native-vector-icons/FontAwesome";

export default class Explanation extends Component {
  render() {
    // const { navigate } = this.props.navigation;
    return (
      <Fragment>
      <View style={{marginTop: 50 }}>
      <Button
        title="Go to memorize 01"
        // onPress={() => navigate("MemorizeScreen", { screen: MemorizeScreen })}
        onPress={() => {this.props.handleAnswer("memorize01")}}/>
      </View>
      </Fragment>
    );
  }
}