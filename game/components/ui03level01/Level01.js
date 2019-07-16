import React, { Fragment, Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import CountdownGame from "../Countdown/CountdownGame";
import CountDown from "react-native-countdown-component";
import GameSpa from "../GameSpa/GameSpa";

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

const numColumns = 2;

export default class Level01 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      numColumns: this.props.numColumns
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  renderItem = ({ item }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <View style={styles.item}>
        <TouchableOpacity
          style={styles.button}
          onClick={() => this.props.setButton(item.answer)}
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
    let data = formatData(this.props.data, this.state.numColumns)
    return (
      <Fragment>
        <FlatList
          data={data}
          style={styles.container}
          renderItem={this.renderItem}
          numColumns={this.state.numColumns}
          keyExtractor={this.props.data.key}
        />
        {console.log('this.props',this.props.data)}
        {console.log('this.props num',this.props.numColumns)}
        <View style={[styles.countContainer]}>
          <Text style={[styles.countText]}>
            {this.state.count !== 0 ? this.state.count : null}
          </Text>
        </View>
        {/* <CountdownGame/> */}
        <CountDown
          until={6}
          size={30}
          onFinish={() => this.props.setButton("fail")}
          digitStyle={{ backgroundColor: "#FFF" }}
          digitTxtStyle={{ color: "#1CC625" }}
          timeToShow={["S"]}
          timeLabels={{ s: "Seconds" }}
        />
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20
  },
  item: {
    backgroundColor: "#4D243D",
    // backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin: 1,
    height: Dimensions.get("window").width / numColumns // approximate a square
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
