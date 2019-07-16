import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Button,
  Text,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import CountdownGame from "../Countdown/CountdownGame";
import ModalExample from "../Modal/ModalExample";
import Modal from "react-native-modal";

export default class FiguresCountdown extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleAddPoints = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  handleAddPoints222 = () => {
    this.setState({
      count: this.state.points + 1
    });
  };
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  handleWrongAnswer = () => {
    navigate("FirstStartGame", { screen: FirstStartGame });
  };

  render() {
    const points = this.state.points;
    return (
      <>
        <View style={[styles.row, styles.scrollViewMargin]}>
          <View style={[styles.box]}>
            <Icon.Button
              name="circle"
              size={30}
              color="#11A0FF"
              backgroundColor="transparent"
              underlayColor="transparent"
              onPress={this.toggleModal}
            />
          </View>
          <View style={[styles.box]}>
            <Icon.Button
              name="cloud"
              size={30}
              color="#7D26FF"
              backgroundColor="transparent"
              onPress={() => alert("Hi")}
            />
          </View>
          <View style={[styles.box]}>
            <Icon.Button
              name="star"
              size={30}
              color="#304BFC"
              backgroundColor="transparent"
              onPress={() => alert("Hi")}
            />
          </View>
          <View style={[styles.box]}>
            <Icon.Button
              name="certificate"
              size={30}
              color="#2AC427"
              backgroundColor="transparent"
              onPress={() => alert("Hi")}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={[styles.box]}>
            <Icon.Button
              name="cloud"
              size={30}
              color="#FF50CE"
              backgroundColor="transparent"
              onPress={() => alert("Hi")}
            />
          </View>
          <View style={[styles.box]}>
            <Icon.Button
              name="heart"
              size={30}
              color="#11A0FF"
              backgroundColor="transparent"
              onPress={() => alert("Hi")}
            />
          </View>
          <View style={[styles.box]}>
            <Icon.Button
              name="lock"
              size={30}
              color="#FF50CE"
              backgroundColor="transparent"
              onPress={() => alert("Hi")}
            />
          </View>
          <View style={[styles.box]}>
            <Icon.Button
              name="leaf"
              size={30}
              color="#304BFC"
              backgroundColor="transparent"
              onPress={() => alert("Hi")}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={[styles.box]}>
            <Icon.Button
              name="paw"
              size={30}
              color="#FFD323"
              backgroundColor="transparent"
              onPress={() => alert("Hi")}
            />
          </View>
          <View style={[styles.box]}>
            <Icon.Button
              name="paw"
              size={30}
              color="#2AC427"
              backgroundColor="transparent"
              onPress={() => alert("Hi")}
            />
          </View>
          <View style={[styles.box]}>
            <Icon.Button
              name="circle"
              size={30}
              color="#304BFC"
              backgroundColor="transparent"
              onPress={() => alert("Hi")}
            />
          </View>
          <View style={[styles.box]}>
            <Icon.Button
              name="user"
              size={30}
              color="#FFD323"
              backgroundColor="transparent"
              onPress={() => alert("Hi")}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={[styles.box]}>
            <Icon.Button
              name="certificate"
              size={30}
              color="#FF50CE"
              backgroundColor="transparent"
              onPress={() => alert("Hi")}
            />
          </View>
          <View style={[styles.box]}>
            <Icon.Button
              name="star"
              size={30}
              color="#FF9837"
              backgroundColor="transparent"
              onPress={() => alert("Hi")}
            />
          </View>
          <View style={[styles.box]}>
            <Icon.Button
              name="heart"
              size={30}
              color="#FF50CE"
              backgroundColor="transparent"
              onPress={() => alert("Hi")}
            />
          </View>
          <View style={[styles.box]}>
            <Icon.Button
              name="heart"
              size={30}
              color="#11A0FF"
              backgroundColor="transparent"
              onPress={() => alert("Hi")}
            />
          </View>
        </View>
        <View style={styles.timerViewMargin}>{/* <CountdownGame/> */}</View>
        {/* <View>
      <ModalExample/>
      </View> */}
        <View style={{ flex: 1 }}>
          <Button title="Show modal" onPress={this.toggleModal} />
          <Modal isVisible={this.state.isModalVisible}>
            <View style={{ flex: 1 }}>
              <Text style={{ color: "white" }}>Woops! Wrong Answer</Text>
              <Button title="Hide modal" onPress={this.toggleModal} />
            </View>
          </Modal>
        </View>
        {/*Touchable opacity added*/}
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={this.handleAddPoints}
          >
            <Icon
              name="certificate"
              size={30}
              color="#FF50CE"
              backgroundColor="transparent"
            />
          </TouchableOpacity>
          <View style={[styles.countContainer]}>
            <Text style={[styles.countText]}>
              {this.state.count !== 0 ? this.state.count : null}
            </Text>
          </View>
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
  },
  container2: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  countText: {
    color: "#FF00FF"
  }
});
