import React, { Component, Fragment } from "react";
import { Text, Button, View, StyleSheet } from "react-native";
// import FiguresCountdown from "./FiguresCountdown";
import Level01 from "../ui03level01/Level01";
import CountDown from "react-native-countdown-component";
import Icon from "react-native-vector-icons/FontAwesome";
import GameSpa from "../GameSpa/GameSpa"

export default class SecondShowFigure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  componentwillUnmount(){  clearInterval(<CountDown></CountDown>); }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Fragment>
       <Text style={[styles.centering]}>Time to memorize!</Text>
      <View style={[styles.row]}>
        <View style={[styles.box]}>
        <Text style={[styles.centering]}>Color</Text>
          <Icon.Button
            name="star"
            size={30}
            color="#FF50CE"
            backgroundColor="transparent"
            underlayColor="transparent"
          />
        </View>
        <View style={[styles.box]}>
        <Text style={[styles.centering]}>Shape</Text>
          <Icon.Button
            name="heart"
            size={30}
            color="#2AC427"
            backgroundColor="transparent"
          />
        </View>
      </View>
      <View style={[styles.row]}>
        <View style={[styles.box]}>
        <CountDown
            until={5}
            size={30}
            onFinish={() => navigate("GameSpa", { screen: GameSpa })}
            digitStyle={{ backgroundColor: "#FFF" }}
            digitTxtStyle={{ color: "#1CC625" }}
            timeToShow={["S"]}
            timeLabels={{ s: "Seconds" }}
          />
          <Button
          title="Skip time"
          onPress={() => navigate("GameSpa", { screen: GameSpa })}
        />
        </View>
      </View>
      </Fragment>
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
  centering:{
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    textAlign: "center"
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
