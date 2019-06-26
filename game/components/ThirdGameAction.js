import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import FiguresCountdown from "./FiguresCountdown";

export default class SecondPlayGame extends Component {
  state = {
    loading: false,
    data: [],
    fav: false
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.header]} />
        <ScrollView>
          <FiguresCountdown />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
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
    marginBottom: 5
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
  box2: {
    backgroundColor: "green"
  },
  box3: {
    backgroundColor: "orange"
  },
  two: {
    flex: 2
  }
});
