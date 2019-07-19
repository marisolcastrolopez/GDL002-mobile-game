import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const HeaderGradient = () => (
  <LinearGradient
    colors={["#f0e38d", "#95f0d6"]}
    style={{
      padding: 15,
      height: 50,
      alignItems: "center",
      borderRadius: 5,
      flex: 1,
      backgroundColor: "#f0e38d",
      zIndex: 10,
      left: 0,
      right: 0,
      top: 0
    }}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
  />
);

export default HeaderGradient;
