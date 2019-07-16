import React, { Component } from "react";
import {
  Text,
  View
} from "react-native";
import GridGame from "../ui03level01/GridGame";
import levelOneData from "../Data/data01level";

export default class GameSpa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonId: null,
      count: 0,
      levelOneData: levelOneData,
      twoColumn: 3
    };
    this.setButton = this.setButton.bind(this);
  }
  componentDidMount() {
    this.mounted = true;
  }
  componentWillUnmount() {
    this.mounted = false;
  }

  setButton(id) {
    this.setState({ buttonId: id });
  }

  render() {
    return (
      <View>
        {this.state.buttonId === "level02" && (
          <View>
            <Text>Hola Ganaste</Text>
          </View>
        )}
        {this.state.buttonId === "fail" && (
          <View>
            <Text>Hola Perdiste</Text>
          </View>
        )}
        {this.state.buttonId !== "level02" && this.state.buttonId !== "fail" && (
          //1° Level
          <GridGame setButton={(answer) => this.setButton(answer)} data={this.state.levelOneData} numColumns={this.state.twoColumn} />
        )}
        <input
          onClick={() => this.setButton("level02")}
          value="Level 02"
          type="button"
          ref="button"
        />
        <input
          onClick={() => this.setButton("fail")}
          value="You lost"
          ref="button1"
          type="button"
        />
      </View>
    );
  }
}
