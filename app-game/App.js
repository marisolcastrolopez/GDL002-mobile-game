import React from "react";
import { Header } from "react-native-elements";
import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";

const data = [
  { key: "A" },
  { key: "B" },
  { key: "C" },
  { key: "D" },
  { key: "E" },
  { key: "F" },
  { key: "G" },
  { key: "H" },
  { key: "I" },
  { key: "J" },
  { key: "K" },
  { key: "L" },
  { key: "M" },
  { key: "N" },
  { key: "0" },
  { key: "P" },
  { key: "Q" },
  { key: "R" },
  { key: "S" },
  { key: "T" },
  { key: "U" },
  { key: "V" },
  { key: "W" },
  { key: "X" },
  { key: "Y" },
  { key: "Z" },
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
        <Text style={styles.itemText}>{item.key}</Text>
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
//       <View style={styles.containerStyle}>
//         {/* 1 First Line */}
//         <Grid>
//           <Col>
//             <Text style={styles.icons}>
//               <Icon name="heart" size={30} color="#11A0FF" />
//             </Text>
//           </Col>
//           <Col>
//             <Text style={styles.icons}>
//               <Icon name="cloud" size={30} color="#7D26FF" />
//             </Text>
//           </Col>
//           <Col>
//             <Text style={styles.icons}>
//               <Icon name="star" size={30} color="#FF9837" />
//             </Text>
//           </Col>
//           <Col>
//             <Text style={styles.icons}>
//               <Icon name="certificate" size={30} color="#FF50CE" />
//             </Text>
//           </Col>
//         </Grid>
//         {/* 2 Second Line */}
//         <Grid>
//           <Col>
//             <Text style={styles.icons}>
//               <Icon name="user" size={30} color="#FFD323" />
//             </Text>
//           </Col>
//           <Col>
//             <Text style={styles.icons}>
//               <Icon name="square" size={30} color="#63E2DC" />
//             </Text>
//           </Col>
//           <Col>
//             <Text style={styles.icons}>
//               <Icon name="circle" size={30} color="#304BFC" />
//             </Text>
//           </Col>
//           <Col>
//             <Text style={styles.icons}>
//               <Icon name="paw" size={30} color="#2AC427" />
//             </Text>
//           </Col>
//         </Grid>
//         {/* 3 First Line */}
//         <Grid>
//           <Col>
//             <Text style={styles.icons}>
//               <Icon name="close" size={30} color="#11A0FF" />
//             </Text>
//           </Col>
//           <Col>
//             <Text style={styles.icons}>
//               <Icon name="leaf" size={30} color="#304BFC" />
//             </Text>
//           </Col>
//           <Col>
//             <Text style={styles.icons}>
//               <Icon name="asterisk" size={30} color="#304BFC" />
//             </Text>
//           </Col>
//           <Col>
//             <Text style={styles.icons}>
//               <Icon name="lock" size={30} color="#FF50CE" />
//             </Text>
//           </Col>
//         </Grid>
//         {/* 4 First Line */}
//         <Grid>
//           <Col>
//             <Text style={styles.icons}>
//               <Icon name="cloud" size={30} color="#FF50CE" />
//             </Text>
//           </Col>
//           <Col>
//             <Text style={styles.icons}>
//               <Icon name="certificate" size={30} color="#FF50CE" />
//             </Text>
//           </Col>
//           <Col>
//             <Text style={styles.icons}>
//               <Icon name="star" size={30} color="#FF9837" />
//             </Text>
//           </Col>
//           <Col>
//             <Text style={styles.icons}>
//               <Icon name="heart" size={30} color="#FF50CE" />
//             </Text>
//           </Col>
//         </Grid>
//         {/* 5 First Line */}
//         <Grid>
//           <Col>
//             <Text style={styles.icons}>
//               <Icon name="circle" size={30} color="#11A0FF" />
//             </Text>
//           </Col>
//           <Col>
//             <Text style={styles.icons}>
//               <Icon name="paw" size={30} color="#7D26FF" />
//             </Text>
//           </Col>
//           <Col>
//             <Text style={styles.icons}>
//               <Icon name="circle" size={30} color="#FF9837" />
//             </Text>
//           </Col>
//           <Col>
//             <Text style={styles.icons}>
//               <Icon name="user" size={30} color="#FF50CE" />
//             </Text>
//           </Col>
//         </Grid>
//         {/* 6 First Line */}
//         <Grid>
//           <Col>
//             <Text style={styles.icons}>
//               <Icon name="asterisk" size={30} color="#11A0FF" />
//             </Text>
//           </Col>
//           <Col>
//             <Text style={styles.icons}>
//               <Icon name="square" size={30} color="#7D26FF" />
//             </Text>
//           </Col>
//           <Col>
//             <Text style={styles.icons}>
//               <Icon name="heart" size={30} color="#FF9837" />
//             </Text>
//           </Col>
//           <Col>
//             <Text style={styles.icons}>
//               <Icon name="close" size={30} color="#FF50CE" />
//             </Text>
//           </Col>
//         </Grid>
//       </View>
//     </View>
//     </View>
//   );
// }

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
