import React, { Fragment, PureComponent, Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Button
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import CountdownGame from "../Countdown/CountdownGame";
import data from "../Data/data01level";
import renderIf from "./renderIf";
import Level01 from "../ui03level01/Level01";

export default class GameSpa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonId: null,
      count: 0
    };
    this.setButton = this.setButton.bind(this);
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
          <Level01 setButton={(data) => this.setButton(data)} />
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
