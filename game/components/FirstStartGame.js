import React, { Component, Fragment } from "react";
import {
  Button,
  StyleSheet,
  View,
  Animated,
  Easing,
  Text,
  TouchableOpacity,
  Image
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Font from "expo-font";
// import Icon from "react-native-vector-icons/FontAwesome";

export default class FirstStartGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      raleway: require("../assets/fonts/Raleway-Regular.ttf")
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <Fragment>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Image
            source={require("../assets/logocolor.png")}
            style={{ width: 200 }}
            resizeMode="contain"
          />
          {this.state.fontLoaded ? (
                <Text
                  style={{
                    fontSize: 16,
                    color: "#636863",
                    fontFamily: "raleway",
                    textAlign: "center",
                  }}
                >
                  A game to test your brain!. {"\n"} Remember the color + the shape
                </Text>
              ) : null}
          <TouchableOpacity
            style={styles.shadow}
            onPress={this.props.handleAnswer}
          >
            <LinearGradient
              colors={["#6DDEAF", "#6CC7BB"]}
              style={{
                paddingTop: 15,
                paddingBottom: 15,
                paddingLeft: 50,
                paddingRight: 50,
                alignItems: "center"
              }}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              {this.state.fontLoaded ? (
                <Text
                  style={{
                    fontSize: 16,
                    color: "#fff",
                    fontFamily: "raleway",
                    textAlign: "center",
                    textTransform: "uppercase",
                    letterSpacing: 4
                  }}
                >
                  Let's Play!
                </Text>
              ) : null}
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
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
    justifyContent: "space-between"
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
  shadow: {
    shadowOffset: { width: 0, height: 6 },
    shadowColor: "#000",
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
    backgroundColor: "white",
    marginTop: 60,
    marginBottom: 20
  }
});
