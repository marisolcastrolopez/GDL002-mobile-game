// import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import FirstStartGame from "./FirstStartGame";
import SecondPlayGame from "./SecondPlayGame";
import ThirdPlayGame from "./ThirdPlayGame";

const MainNavigator = createStackNavigator({
  FirstStartGame: {screen: FirstStartGame},
  SecondPlayGame: {screen: SecondPlayGame},
  ThirdPlayGame: {screen: ThirdPlayGame},
},
{
  initialRouteName: "FirstStartGame"
}
);

const App = createAppContainer(MainNavigator);

export default App;