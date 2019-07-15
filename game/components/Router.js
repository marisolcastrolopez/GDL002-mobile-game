// import React, { Component } from "react";
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import FirstStartGame from "./ui01start/FirstStartGame";
import SecondShowFigure from "./ui02memorize/SecondShowFigure";
import Level01 from "./ui03level01/Level01";
import GameSpa from "./GameSpa/GameSpa"

const MainNavigator = createSwitchNavigator({
  FirstStartGame: {screen: FirstStartGame},
  SecondShowFigure: {screen: SecondShowFigure},
  Level01: {screen: Level01},
  GameSpa: {screen: GameSpa},
},
{
  initialRouteName: "FirstStartGame"
}
);

const App = createAppContainer(MainNavigator);

export default App;