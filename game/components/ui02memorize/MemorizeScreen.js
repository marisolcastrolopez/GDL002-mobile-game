import React, { Component, Fragment } from "react";
import {
  Text,
  Button,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
import HeaderGradient from "../Header/Header";
import CountDown from "react-native-countdown-component";
import Icon from "react-native-vector-icons/AntDesign";
import * as Font from "expo-font";

export default class MemorizeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      fontLoaded: false,
      shape: [],
      colorOne: this.props.colorOne,
      colorTwo: this.props.colorTwo,
      shapeOne: this.props.shapeOne,
      shapeTwo: this.props.shapeTwo,
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      raleway: require("../../assets/fonts/Raleway-Regular.ttf")
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    let colorOne = this.state.colorOne
    let colorTwo = this.state.colorTwo
    let shapeOne = this.state.shapeOne
    let shapeTwo = this.state.shapeTwo
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
                      color: colorOne
                    }}
                  >
                    Color
                  </Text>
                ) : null}
                {/* //First Icon---------------------------- */}
                <Icon name={shapeOne} size={40} color={colorOne} />
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
                      color: colorTwo
                    }}
                  >
                    Shape
                  </Text>
                ) : null}
                {/* //Second Icon---------------------------- */}
                <Icon name={shapeTwo} size={40} color={colorTwo} />
              </View>
            </View>
            <View style={[styles.row]}>
              <View style={[styles.box]}>
                {this.state.fontLoaded ? (
                  <TouchableOpacity style={styles.timerShadow}>
                    <CountDown
                      until={60}
                      size={20}
                      onFinish={this.props.handleAnswer}
                      digitStyle={{
                        height: 60,
                        width: 60,
                        backgroundColor: "transparent",
                        borderRadius: 400
                      }}
                      digitTxtStyle={{
                        color: "#636863",
                        fontFamily: "raleway",
                        backgroundColor: "transparent"
                      }}
                      timeToShow={["S"]}
                      timeLabels={{ s: null }}
                    />
                  </TouchableOpacity>
                ) : null}
                <TouchableOpacity
                  title="Skip time"
                  onPress={this.props.handleAnswer}
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
    shadowOpacity: 0.1,
    shadowRadius: 3.84,

    elevation: 5
  },
  timerShadow: {
    shadowOffset: { width: 0, height: 6 },
    shadowColor: "#000",
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
    backgroundColor: "white",
    borderRadius: 400,
    marginTop: 60,
    marginBottom: 20
  }
});
