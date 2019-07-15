// import React, { Component } from "react";
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import FirstStartGame from "./ui01start/FirstStartGame";
import SecondShowFigure from "./ui02memorize/SecondShowFigure";
import Test from "./ui03level01/Test";

const MainNavigator = createSwitchNavigator({
  FirstStartGame: {screen: FirstStartGame},
  SecondShowFigure: {screen: SecondShowFigure},
  Test: {screen: Test},
},
{
  initialRouteName: "FirstStartGame"
}
);

const App = createAppContainer(MainNavigator);

export default App;