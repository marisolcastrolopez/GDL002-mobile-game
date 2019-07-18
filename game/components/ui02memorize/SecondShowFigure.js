import React, { Component, Fragment } from "react";
import {
  Text,
  Button,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
// import FiguresCountdown from "./FiguresCountdown";
import HeaderGradient from "../Header/Header";
import CountDown from "react-native-countdown-component";
import Icon from "react-native-vector-icons/AntDesign";
import GameSpa from "../GameSpa/GameSpa";
import * as Font from "expo-font";

export default class SecondShowFigure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      fontLoaded: false
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      raleway: require("../../assets/fonts/Raleway-Regular.ttf")
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Fragment>
        <View style={styles.container}>
          <ScrollView>
            <HeaderGradient />
            <View style={{ marginTop: 60 }}>
              {this.state.fontLoaded ? (
                <Text
                  style={{
                    fontFamily: "raleway",
                    textAlign: "center",
                    fontSize: 22,
                    color: "#636863"
                  }}
                >
                  Time to memorize!
                </Text>
              ) : null}
            </View>
            <View style={[styles.row, styles.shadow, styles.paddingFigures]}>
              <View style={[styles.box]}>
                {this.state.fontLoaded ? (
                  <Text
                    style={{
                      fontFamily: "raleway",
                      textAlign: "center",
                      fontSize: 16,
                      color: "#F972A1"
                    }}
                  >
                    Color
                  </Text>
                ) : null}
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
                <Icon name="plus" size={25} color="#9ea6a5" />
              </View>
              <View style={[styles.box]}>
                {this.state.fontLoaded ? (
                  <Text
                    style={{
                      fontFamily: "raleway",
                      textAlign: "center",
                      fontSize: 16,
                      color: "#77D8CD"
                    }}
                  >
                    Shape
                  </Text>
                ) : null}
                <Icon name="star" size={40} color="#77D8CD" />
              </View>
            </View>
            <View style={[styles.row]}>
              <View style={[styles.box]}>
                {this.state.fontLoaded ? (
                  <CountDown
                    until={60}
                    size={20}
                    onFinish={() => navigate("GameSpa", { screen: GameSpa })}
                    digitStyle={styles.timerCircle}
                    digitTxtStyle={{
                      color: "#636863",
                      fontFamily: "raleway",
                      backgroundColor: "#ffff"
                    }}
                    timeLabelStyle={{
                      color: "#636863",
                      fontFamily: "raleway",
                      marginBottom: 20,
                      marginTop: 5,
                      fontSize: 14
                    }}
                    timeToShow={["S"]}
                    timeLabels={{ s: "Seconds" }}
                  />
                ) : null}
                <TouchableOpacity
                  title="Skip time"
                  onPress={() => navigate("GameSpa", { screen: GameSpa })}
                  style={[styles.btnSkip]}
                >
                  {this.state.fontLoaded ? (
                    <Text
                      style={{
                        color: "#9ea6a5",
                        fontFamily: "raleway",
                        fontSize: 14,
                        paddingTop: 5,
                        paddingRight: 15,
                        paddingBottom: 5,
                        paddingLeft: 15,
                        textTransform: "uppercase",
                        letterSpacing: 4
                      }}
                    >
                      Skip time
                    </Text>
                  ) : null}
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#f6f6f0"
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  shadow: {
    shadowOffset: { width: 0, height: 6 },
    shadowColor: "#000",
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
    backgroundColor: "white"
  },
  box: {
    flex: 1,
    // height: 100,
    backgroundColor: "transparent",
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  paddingFigures: {
    paddingTop: 50,
    paddingLeft: 25,
    paddingBottom: 50,
    paddingRight: 25,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30
  },
  centering: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    textAlign: "center"
  },
  invisible: {
    color: "transparent"
  },
  timerCircle: {
    height: 40,
    width: 60,
    backgroundColor: "#ffff",
    shadowOffset: { width: 0, height: 6 },
    shadowColor: "#000",
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
    borderRadius: 400,
    marginTop: 50
  },
  btnSkip: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#9ea6a5",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.10,
    shadowRadius: 3.84,

    elevation: 5
  }
});
