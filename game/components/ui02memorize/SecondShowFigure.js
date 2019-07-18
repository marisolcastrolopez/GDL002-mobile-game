import React, { Component, Fragment } from "react";
import { Text, Button, View, StyleSheet } from "react-native";
// import FiguresCountdown from "./FiguresCountdown";
import GridGame from "../ui03level01/GridGame";
import CountDown from "react-native-countdown-component";
import Icon from "react-native-vector-icons/AntDesign";
import GameSpa from "../GameSpa/GameSpa"
import * as Font from 'expo-font'

export default class SecondShowFigure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      fontLoaded: false

    };
  }
  // componentDidMount() {
  //   Font.loadAsync({
  //     'raleway': require('../../assets/fonts/raleway-Regular.ttf'),
  //   })
  //   .then(() => {
  //     this.setState({ fontLoaded: true });
  //     this.defaultFonts();
  //  });
  // }
  async componentDidMount() {
    await Font.loadAsync({
      'raleway': require('../../assets/fonts/Raleway-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }


  render() {
    const { navigate } = this.props.navigation;
    return (
      <Fragment>
       <Text style={[styles.centering]}>Time to memorize!</Text>
      <View style={[styles.row]}>
        <View style={[styles.box]}>
        <Text style={[styles.centering]}>Color</Text>
          <Icon
            name="cloud"
            size={40}
            color="#F972A1"
            backgroundColor="transparent"
            underlayColor="transparent"
          />
        </View>
        <View style={[styles.box]}>
        <Text style={[styles.centering, styles.invisible]}>No</Text>
          <Icon
            name="plus"
            size={40}
            color="#9ea6a5"
            // backgroundColor="transparent"
          />
        </View>
        <View style={[styles.box]}>
        <Text style={[styles.centering]}>Shape</Text>
          <Icon
            name="star"
            size={40}
            color="#77D8CD"
            // backgroundColor="transparent"
          />
          {
    this.state.fontLoaded ? (
      <Text style={{fontFamily: 'raleway'}}>Hola</Text>
    ) : null
  }
        </View>
      </View>
      <View style={[styles.row]}>
        <View style={[styles.box]}>
        {/* <CountDown
            until={5}
            size={30}
            onFinish={() => navigate("GameSpa", { screen: GameSpa })}
            digitStyle={{ backgroundColor: "#FFF" }}
            digitTxtStyle={{ color: "#1CC625" }}
            timeToShow={["S"]}
            timeLabels={{ s: "Seconds" }}
          /> */}
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
    textAlign: "center",
  },
  box2: {
    backgroundColor: "green"
  },
  box3: {
    backgroundColor: "orange"
  },
  two: {
    flex: 2
  },
  invisible: {
    color: "transparent"
  }
});
