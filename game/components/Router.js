// import React, { Component } from "react";
import {  createAppContainer, createSwitchNavigator } from 'react-navigation';
import FirstStartGame from "./ui01start/FirstStartGame";
import MemorizeScreen from "./ui02memorize/MemorizeScreen";
import GridGame from "./ui03level01/GridGame";
import GameSpa from "./GameSpa/GameSpa"

const MainNavigator = createSwitchNavigator({
  FirstStartGame: {screen: FirstStartGame},
  MemorizeScreen: {screen: MemorizeScreen},
  GridGame: {screen: GridGame},
  GameSpa: {screen: GameSpa},
},
{
  initialRouteName: "FirstStartGame"
}
);

const App = createAppContainer(MainNavigator);

export default App;