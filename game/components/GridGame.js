import React, { Fragment, Component } from "react";
import { Alert } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import CountDown from "react-native-countdown-component";
import * as Font from "expo-font";

const formatData = (data, numColumns) => {
  let numberOfElementsLastRow = data.length % numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }
  data.sort(() => Math.random() - 0.5);
  return data;
};

export default class GridGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      fontLoaded: false,
      numColumns: this.props.numColumns
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      raleway: require("../assets/fonts/Raleway-Regular.ttf")
    });

    this.setState({ fontLoaded: true });
  }

  renderItem = ({ item }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <View style={[styles.item]}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.handleAnswer(item.userAnswer);
          }}
        >
          <Icon
            name={item.name}
            size={30}
            color={item.color}
            style={styles.iconTransparent}
          />
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    let data = formatData(this.props.data, this.state.numColumns);
    return (
      <Fragment>
        <FlatList
          data={data}
          style={[styles.container, styles.shadow]}
          renderItem={this.renderItem}
          numColumns={this.state.numColumns}
          keyExtractor={this.props.data.key}
        />
        {/* <View style={[styles.countContainer]}>
          <Text style={[styles.countText]}>
            {this.state.count !== 0 ? this.state.count : null}
          </Text>
        </View> */}
        <View style={[styles.row]}>
          <View style={[styles.box]}>
            {this.state.fontLoaded ? (
              <TouchableOpacity style={styles.timerShadow}>
                <CountDown
                  until={10}
                  size={20}
                  onFinish={() => this.props.handleAnswer("fail")}
                  digitStyle={{
                    height: 60,
                    width: 10,
                    backgroundColor: "transparent",
                    borderRadius: 400
                  }}
                  digitTxtStyle={{
                    color: "#636863",
                    fontFamily: "raleway",
                    backgroundColor: "transparent"
                  }}
                  timeToShow={["S"]}
                  timeLabels={{ s: null }}
                />
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 30,
    padding: 20
  },
  shadow: {
    shadowOffset: { width: 0, height: 6 },
    shadowColor: "#000",
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
    backgroundColor: "white"
  },
  item: {
    // backgroundColor: "#4D243D",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin: 1,
    // height: Dimensions.get("window").width / numColumns // approximate a square
    height: 90
  },
  itemInvisible: {
    backgroundColor: "transparent"
  },
  itemText: {
    color: "#fff"
  },
  button: {
    alignItems: "center",
    backgroundColor: "transparent",
    padding: 12
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  countText: {
    color: "#FF00FF"
  },
  iconTransparent: {
    backgroundColor: "transparent"
  },
  timerShadow: {
    shadowOffset: { width: 0, height: 6 },
    shadowColor: "#000",
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
    backgroundColor: "white",
    borderRadius: 400,
    marginTop: 5,
    marginBottom: 30
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  box: {
    flex: 1,
    backgroundColor: "transparent",
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center"
  }
});
