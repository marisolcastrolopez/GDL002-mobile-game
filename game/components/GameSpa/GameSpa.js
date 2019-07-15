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
import data from "../Data/data01level"
import renderIf from './renderIf';




export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
        <View>
            {renderIf(1>2,
                <View><Text>Hola 1</Text></View>
            )}
            {renderIf(1<2,
                <View><Text>Hola 2</Text></View>
            )}
        </View>
    )
}
}

