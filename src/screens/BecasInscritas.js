import React from "react";
import { View, Text } from "react-native";

const BecasInscritas = props => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f9ed69",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text style={{ fontSize: 42, fontWeight: "bold", color: "white" }}>
        BecasInscritas
      </Text>
    </View>
  );
};

export default BecasInscritas;