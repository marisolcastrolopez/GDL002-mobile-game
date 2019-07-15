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
import { StackNavigator } from 'react-navigation';
import SecondShowFigure from "../ui02memorize/SecondShowFigure";
import FirstStartGame from "../ui01start/FirstStartGame";

const data = [
  { key: "A", name: "certificate", color: "#FF50CE", answer: true, key: 0 },
  { key: "B", name: "cloud", color: "#FF50CE", answer: false, key: 1 },
  { key: "C", name: "certificate", color: "#FF50CE", answer: false, key: 2 },
  { key: "D", name: "certificate", color: "#FF50CE", answer: false, key: 3 }
  //   { key: 'E' }, { key: 'F' }, { key: 'G' }, { key: 'H' }, { key: 'I' }, { key: 'J' },
  //   { key: 'K' },
  //   { key: 'L' },
];

const formatData = (data, numColumns) => {
  let numberOfElementsLastRow = data.length % numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }
  return data;
};

const numColumns = 2;

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  navigate  = this.props.navigation;
  // handleAddPoints = () => {
  //   this.setState({
  //     count: this.state.count + 1
  //   });
  // };

  // navigatetoPage = (data) => {
  //     const page = data.answer == true ?  SecondShowFigure : FirstStartGame;
  //      this.props.navigation.navigate(`${page}`, { screen: page });
  //  }

  renderItem = ({ item, index }) => {
    const { navigate } = this.props.navigation;
    const page = item.answer === true ?  SecondShowFigure : FirstStartGame;
    console.log(page);
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.key}</Text>
        <Text style={styles.itemText}>{item.name}</Text>
        <TouchableOpacity style={styles.button}>
          <Icon
            name={item.name}
            size={30}
            color={item.color}
            backgroundColor="transparent"
            onPress={() => navigate(`"${page}"`, { screen: page })}
          />
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Fragment>
        <FlatList
          data={formatData(data, numColumns)}
          style={styles.container}
          renderItem={this.renderItem}
          numColumns={numColumns}
          keyExtractor={data.key}
        />
        <View style={[styles.countContainer]}>
          <Text style={[styles.countText]}>
            {this.state.count !== 0 ? this.state.count : null}
          </Text>
        </View>
        {/* <Icon
            name="certificate"
            size={30}
            color="pink"
            backgroundColor="transparent"
            onPress={this.navigatetoPage(data)}
          /> */}
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
  }
});
