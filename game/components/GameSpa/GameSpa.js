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
  parentMethod = () =>{
    console.log('parent method called :D');
}
  render() {
    return (
      <View>
        {this.state.buttonId === 1 && (
          <View>
            <Text>Hola 1</Text>
          </View>
        )}
        {this.state.buttonId === 2 && (
          <View>
            <Text>Hola 2</Text>
          </View>
        )}
        {this.state.buttonId !== 1 && this.state.buttonId !== 2 && <Level01 setButton={() => this.setButton(1)} ></Level01>}
        <input
          onClick={() => this.setButton(1)}
          value="Next Level"
          type="button"
          ref="button"
        />
        <input
          onClick={() => this.setButton(2)}
          value="Contest"
          ref="button1"
          type="button"
        />
      </View>
    );
  }
}
