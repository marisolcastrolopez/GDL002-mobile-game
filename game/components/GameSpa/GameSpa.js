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
import levelTwoData from "../Data/data02level";
import levelThreeData from "../Data/data03level";
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
      userAnswer: null,
      count: 0,
      numColumns: [3, 4, 5],
      data: [levelOneData, levelTwoData, levelThreeData]
    };
    this.handleAnswer = this.handleAnswer.bind(this);
  }

  handleAnswer(answer) {
    this.setState({ userAnswer: answer });
  }

  render() {
    return (
      <Fragment>
        <View style={styles.container}>
          <ScrollView>
            {this.state.userAnswer === "level03" && (
              //3° Level
              <View>
                <View style={[styles.header]}>
                  <HeaderGradient />
                </View>
                <GridGame
                  handleAnswer={answer => this.handleAnswer(answer)}
                  data={this.state.data[2]}
                  numColumns={this.state.numColumns[2]}
                />
              </View>
            )}
            {this.state.userAnswer === "level02" && (
              //2° Level
              <View>
                <View style={[styles.header]}>
                  <HeaderGradient />
                </View>
                <GridGame
                  handleAnswer={answer => this.handleAnswer(answer)}
                  data={this.state.data[1]}
                  numColumns={this.state.numColumns[1]}
                />
              </View>
            )}
            {this.state.userAnswer !== "level02" &&
              this.state.userAnswer !== "fail" &&
              this.state.userAnswer !== "level03" && (
                //1° Level Default Page <---Important default page 1 level
                <View>
                  <View style={[styles.header]}>
                    <HeaderGradient />
                  </View>
                  <GridGame
                    handleAnswer={answer => this.handleAnswer(answer)}
                    data={this.state.data[0]}
                    numColumns={this.state.numColumns[0]}
                  />
                </View>
              )}
            {this.state.userAnswer === "fail" && (
              //Failure Page <--- Important default page for failure
              <View>
                <Text>Hola Perdiste</Text>
              </View>
            )}
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
