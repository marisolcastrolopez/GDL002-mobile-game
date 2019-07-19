import React, { Component, Fragment } from "react";
import { Button, StyleSheet, View, Animated, Easing } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome";

export default class FirstStartGame extends Component {
  render() {
    return (
      <Fragment>
      <View style={{marginTop: 50 }}>
      <Button
        title="Start Game"
        onPress={this.props.handleAnswer}/>
      </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
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
  }
});
