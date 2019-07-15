// import React, { Component } from "react";
import { createStackNavigator, createAppContainer, createSwitchNavigator, withNavigation } from 'react-navigation';
import FirstStartGame from "./ui01start/FirstStartGame";
import SecondShowFigure from "./ui02memorize/SecondShowFigure";
import Level01 from "./ui03level01/Level01";

const MainNavigator = createSwitchNavigator({
  FirstStartGame: {screen: FirstStartGame, count: 0},
  SecondShowFigure: {screen: SecondShowFigure, count: 0},
  Level01: {screen: Level01, count: 0},
},
{
  initialRouteName: "FirstStartGame"
}
);

const Router = createAppContainer(MainNavigator);

export default Router;