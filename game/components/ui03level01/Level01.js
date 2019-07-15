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
      count: 0
    };
  }
  componentDidMount() {
    console.log("this.props.navigation.count", this.props.navigation.count)
  }
  handleAddPoints = () => {
    this.setState({
      count: this.props.navigation.count + 1
    });
  };

  correctAnswer = (item) => {
    const { navigate } = this.props.navigation;
    const { count } = this.props;
    // navigate(item.topage, { screen: item.topage });
    // const counter = count.state.params('count', 'count');
    // console.log(JSON.stringify(counter));
    // this.setState({
    //   count: this.props.navigation.count + 1
    // });

   }

  renderItem = ({ item }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <View style={styles.item}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.correctAnswer(item)}
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
            {/* {this.state.count} */}
            {this.state.count !== 0 ? this.state.count : null}
          </Text>
        </View>
        {/* <CountdownGame/> */}
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
