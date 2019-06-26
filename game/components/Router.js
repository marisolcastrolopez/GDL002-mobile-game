// import React, { Component } from "react";
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import FirstStartGame from "./FirstStartGame";
import SecondShowFigure from "./SecondShowFigure";
import ThirdGameAction from "./ThirdGameAction";

const MainNavigator = createSwitchNavigator({
  FirstStartGame: {screen: FirstStartGame},
  SecondShowFigure: {screen: SecondShowFigure},
  ThirdGameAction: {screen: ThirdGameAction},
},
{
  initialRouteName: "FirstStartGame"
}
);

const App = createAppContainer(MainNavigator);

export default App;