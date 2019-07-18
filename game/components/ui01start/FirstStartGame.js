import React, { Component, Fragment } from "react";
import { Button, StyleSheet, View, Animated, Easing } from "react-native";
import SecondShowFigure from "../ui02memorize/SecondShowFigure";
import Icon from "react-native-vector-icons/FontAwesome";

export default class FirstStartGame extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Fragment>
      <View style={{marginTop: 50 }}>
      <Button
        title="Start Game"
        onPress={() => navigate("SecondShowFigure", { screen: SecondShowFigure })}
      />
      </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    // justifyContent: "center"
  },
  header: {
    height: 65,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: "#03A9F4",
    zIndex: 10
  },
  scrollViewMargin: {
    marginTop: 60
  },
  timerViewMargin: {
    marginBottom: 20
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  box: {
    flex: 1,
    height: 100,
    backgroundColor: "transparent",
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  // centering:{
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginRight: 10,
  //   textAlign: "center"
  // },
  // box2: {
  //   backgroundColor: "green"
  // },
  // box3: {
  //   backgroundColor: "orange"
  // },
  // two: {
  //   flex: 2
  // },

});
