import React, { Component } from "react";
import {createStackNavigator, createAppContainer} from 'react-navigation';
import FirstStartGame from "./FirstStartGame";
import SecondPlayGame from "./SecondPlayGame";

const MainNavigator = createStackNavigator({
  FirstStartGame: {screen: FirstStartGame},
  SecondPlayGame: {screen: SecondPlayGame},
},
{
  initialRouteName: "FirstStartGame"
}
);

const App = createAppContainer(MainNavigator);

export default App;