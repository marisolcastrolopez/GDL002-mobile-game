import React, { Component, Fragment } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import GridGame from "./GridGame";
import HeaderGradient from "./Header";
import FirstScreen from "./FirstStartGame";
import MemorizeScreen from "./MemorizeScreen";
import levelOneData from "./Data/data01level";
import levelTwoData from "./Data/data02level";
import levelThreeData from "./Data/data03level";

export default class GameSpa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAnswer: null,
      count: 0,
      numColumns: [3, 4, 5],
      data: [levelOneData, levelTwoData, levelThreeData],
      screens: [
        "level01",
        "level02",
        "level03",
        "memorize01",
        "memorize02",
        "memorize03"
      ],
      memorizeColor: ["#F972A1", "#77D8CD", "#FFD773", "#ABBF60", "#AD84E8"],
      memorizeShape: [
        "cloud",
        "star",
        "heart",
        "smile-circle",
        "frown",
        "pushpin"
      ]
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
            {this.state.userAnswer === "memorize03" && (
              //Memorize 3° Level
              <View>
                <View style={[styles.header]}>
                  <HeaderGradient />
                </View>
                <MemorizeScreen
                  handleAnswer={() => this.handleAnswer(this.state.screens[2])}
                  colorOne={this.state.memorizeColor[2]}
                  colorTwo={this.state.memorizeColor[4]}
                  shapeOne={this.state.memorizeShape[5]}
                  shapeTwo={this.state.memorizeShape[3]}
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
            {this.state.userAnswer === "memorize02" && (
              //Memorize 2° Level
              <View>
                <View style={[styles.header]}>
                  <HeaderGradient />
                </View>
                <MemorizeScreen
                  handleAnswer={() => this.handleAnswer(this.state.screens[1])}
                  colorOne={this.state.memorizeColor[1]}
                  colorTwo={this.state.memorizeColor[4]}
                  shapeOne={this.state.memorizeShape[3]}
                  shapeTwo={this.state.memorizeShape[2]}
                />
              </View>
            )}
            {this.state.userAnswer === "level01" && (
              //1° Level
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
            {this.state.userAnswer === "memorize01" && (
              //Memorize 1° Level
              <View>
                <View style={[styles.header]}>
                  <HeaderGradient />
                </View>
                <MemorizeScreen
                  handleAnswer={() => this.handleAnswer(this.state.screens[0])}
                  colorOne={this.state.memorizeColor[0]}
                  colorTwo={this.state.memorizeColor[1]}
                  shapeOne={this.state.memorizeShape[0]}
                  shapeTwo={this.state.memorizeShape[1]}
                />
              </View>
            )}
            {this.state.userAnswer !== "level03" &&
              this.state.userAnswer !== "memorize03" &&
              this.state.userAnswer !== "level02" &&
              this.state.userAnswer !== "memorize02" &&
              this.state.userAnswer !== "level01" &&
              this.state.userAnswer !== "memorize01" &&
              this.state.userAnswer !== "fail" && (
                //1° Level Default Page <---Important default page 1 level
                <View>
                  <View style={[styles.header]}>
                    <HeaderGradient />
                  </View>
                  <FirstScreen
                    handleAnswer={() =>
                      this.handleAnswer(this.state.screens[3])
                    }
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
  }
});
