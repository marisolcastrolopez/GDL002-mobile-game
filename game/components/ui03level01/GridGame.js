import React, { Fragment, Component } from "react";
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
      numColumns: this.props.numColumns
    };
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
        {/* <CountDown
          until={6}
          size={30}
          onFinish={() => this.props.setButton("fail")}
          digitStyle={{ backgroundColor: "#FFF" }}
          digitTxtStyle={{ color: "#1CC625" }}
          timeToShow={["S"]}
          timeLabels={{ s: "Seconds" }}
        /> */}
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
  }
});
