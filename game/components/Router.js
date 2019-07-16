// import React, { Component } from "react";
import {  createAppContainer, createSwitchNavigator } from 'react-navigation';
import FirstStartGame from "./ui01start/FirstStartGame";
import SecondShowFigure from "./ui02memorize/SecondShowFigure";
import GridGame from "./ui03level01/GridGame";
import GameSpa from "./GameSpa/GameSpa"

const MainNavigator = createSwitchNavigator({
  FirstStartGame: {screen: FirstStartGame},
  SecondShowFigure: {screen: SecondShowFigure},
  GridGame: {screen: GridGame},
  GameSpa: {screen: GameSpa},
},
{
  initialRouteName: "FirstStartGame"
}
);

const App = createAppContainer(MainNavigator);

export default App;