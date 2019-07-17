import React, { Component, Fragment } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
  Input
} from "react-native";
import GridGame from "../ui03level01/GridGame";
import levelOneData from "../Data/data01level";
import levelTwoData from "../Data/data02level"
import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";

const HeaderGradient = () => (
  <LinearGradient
    colors={["#f0e38d", "#95f0d6"]}
    style={{
      padding: 15,
      height: 75,
      alignItems: "center",
      borderRadius: 5,
      flex: 1
    }}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
  />
);

export default class GameSpa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonId: null,
      count: 0,
      levelOneData: levelOneData,
      levelTwoData: levelTwoData,
      twoColumn: 3,
      fourColumn: 4
    };
    this.setButton = this.setButton.bind(this);
  }

  setButton(id) {
    this.setState({ buttonId: id });
  }

  render() {
    return (
      <Fragment>
        <View style={styles.container}>
          <ScrollView>
            {this.state.buttonId === "level02" && (
              //2° Level
              <View>
                  <View style={[styles.header]}>
                    <HeaderGradient />
                  </View>
                  <GridGame
                    setButton={answer => this.setButton(answer)}
                    data={this.state.levelTwoData}
                    numColumns={this.state.fourColumn}
                  />
                </View>
            )}
            {this.state.buttonId === "fail" && (
              //Failure Page
              <View>
                <Text>Hola Perdiste</Text>
              </View>
            )}
            {this.state.buttonId !== "level02" &&
              this.state.buttonId !== "fail" && (
                //1° Level
                <View>
                  <View style={[styles.header]}>
                    <HeaderGradient />
                  </View>
                  <GridGame
                    setButton={answer => this.setButton(answer)}
                    data={this.state.levelOneData}
                    numColumns={this.state.twoColumn}
                  />
                </View>
              )}
            {/* <View>
        <Input
          onClick={() => this.setButton("level02")}
          value="Level 02"
          type="button"
          ref="button"
        />
        <Input
          onClick={() => this.setButton("fail")}
          value="You lost"
          ref="button1"
          type="button"
        />
        </View> */}
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
    justifyContent: "center"
  },
  header: {
    height: 75,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: "#f0e38d",
    zIndex: 10
  }
});
