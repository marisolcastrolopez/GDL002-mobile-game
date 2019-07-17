import React, { Component } from "react";
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
  // componentDidMount() {
  //   this.mounted = true;
  // }
  // componentWillUnmount() {
  //   this.mounted = false;
  // }

  setButton(id) {
    this.setState({ buttonId: id });
  }

  render() {
    return (
      <>
      <View style={styles.container}>

        <ScrollView>

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
          <View>
          <GridGame setButton={(answer) => this.setButton(answer)} data={this.state.levelOneData} numColumns={this.state.twoColumn} />
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


      </>
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
    justifyContent: "space-between",
    marginBottom: 5
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
  box2: {
    backgroundColor: "green"
  },
  box3: {
    backgroundColor: "orange"
  },
  two: {
    flex: 2
  }
});