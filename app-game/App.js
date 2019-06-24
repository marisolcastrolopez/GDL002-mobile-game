import React from "react";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { StyleSheet, Text, View, FlatList, Dimensions, Button } from "react-native";

const data = [
  { key: <Icon key="1" name="heart" size={30} color="#11A0FF" /> },
  { key: <Icon key="2" name="cloud" size={30} color="#7D26FF" /> },
  { key: <Icon key="3" name="star" size={30} color="#FF9837" /> },
  { key: <Icon key="4" name="certificate" size={30} color="#FF50CE" /> },
  { key: <Icon key="5" name="user" size={30} color="#FFD323" /> },
  { key: <Icon key="6" name="square" size={30} color="#63E2DC" /> },
  { key: <Icon key="7" name="circle" size={30} color="#304BFC" />  },
  { key: <Icon key="8" name="paw" size={30} color="#2AC427" />  },
  { key: <Icon key="9" name="close" size={30} color="#11A0FF" /> },
  { key: <Icon key="10" name="leaf" size={30} color="#304BFC" /> },
  { key: <Icon key="11" name="lock" size={30} color="#FF50CE" /> },
  { key: <Icon key="12" name="cloud" size={30} color="#FF50CE" /> },
  { key: <Icon key="13" name="certificate" size={30} color="#2AC427" /> },
  { key: <Icon key="14" name="star" size={30} color="#304BFC" /> },
  { key: <Icon key="15" name="heart" size={30} color="#FF50CE" /> },
  { key: <Icon key="16" name="circle" size={30} color="#11A0FF" /> },
  { key: <Icon key="17" name="paw" size={30} color="#7D26FF" /> },
  { key: <Icon key="18" name="circle" size={30} color="#FF9837" /> },
  { key: <Icon key="19" name="user" size={30} color="#FF50CE" /> },
  { key: <Icon key="20" name="asterisk" size={30} color="#11A0FF" /> },
  { key: <Icon key="21" name="square" size={30} color="#7D26FF" />  },
  { key: <Icon key="22" name="heart" size={30} color="#FF9837" /> },
  { key: <Icon key="23" name="close" size={30} color="#FF50CE" /> },
  { key: <Icon key="24" name="user" size={30} color="#7D26FF" /> },
  { key: <Icon key="25" name="lock" size={30} color="#FFD323" /> },
  { key: <Icon key="26" name="asterisk" size={30} color="#2AC427" /> },
  { key: <Icon key="27" name="heart" size={30} color="#2AC427" /> },
  { key: <Icon key="28" name="circle" size={30} color="#FF50CE" /> },
  { key: <Icon key="29" name="paw" size={30} color="#FFD323" /> },
  { key: <Icon key="30" name="certificate" size={30} color="#304BFC" /> },
];

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

const numColumns = 5;
export default class App extends React.Component {
  renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <View style={styles.item}>
        <Text style={styles.itemText} key={index}>{item.key}</Text>
      </View>
    );
  };

  render() {
    return (
        <FlatList
          data={formatData(data, numColumns)}
          style={styles.container}
          renderItem={this.renderItem}
          numColumns={numColumns}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20
  },
  item: {
    backgroundColor: "#000000",
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
  }
});

// export default class App extends React.Component {
//   render() {
//     return (
//       // Try setting `flexDirection` to `column`.
//       <View>
//         <View>
//           <Header
//             leftComponent={{ icon: "menu", color: "#FF3B9B" }}
//             centerComponent={{ text: "Points : 0", style: { color: "#fff" } }}
//             rightComponent={{ icon: "home", color: "#FF3B9B" }}
//             containerStyle={{
//               backgroundColor: "#FF3B9B",
//               justifyContent: "space-around"
//             }}
//           />
//         </View>
//         <View style={{         flex: 1,
//         flexDirection: 'column',
//         justifyContent: 'space-between', }}>
//           <View
//             style={{ width: 50, height: 50, backgroundColor: "powderblue" }}
//           />
//           <View style={{ width: 50, height: 50, backgroundColor: "skyblue" }} />
//           <View
//             style={{ width: 50, height: 50, backgroundColor: "steelblue" }}
//           />
//         </View>
//       </View>
//     );
//   }
// }
// import { StyleSheet, Text, View } from "react-native";
// import { Col, Row, Grid } from "react-native-easy-grid";
// import { Button, Header } from "react-native-elements";
// import Icon from "react-native-vector-icons/FontAwesome";
// // import CountDown from 'react-native-countdown-component';

// export default function App() {
//   return (
//     <View>
//     <View>
//       <Header
//         leftComponent={{ icon: "menu", color: "#FF3B9B" }}
//         centerComponent={{ text: "Points : 0", style: { color: "#fff" } }}
//         rightComponent={{ icon: "home", color: "#FF3B9B" }}
//         containerStyle={{
//           backgroundColor: "#FF3B9B",
//           justifyContent: "space-around"
//         }}
//       />


// const styles = StyleSheet.create({
//   icons: {
//     textAlign: "center",
//     padding: 25
//   },
//   containerStyle: {
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 5
//     },
//     shadowOpacity: 0.35,
//     shadowRadius: 10.32,
//     elevation: 16,
//     marginLeft: 10,
//     marginRight: 10,
//     marginTop: 40,
//     marginBottom: 5
//   }
// });
