import React, { FC, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
const Dropdown = ({ label, array }) => {
  const [visible, setVisible] = useState(false);

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const renderDropdown = (array) => {
    if (visible) {
      array.map((data) => {
        console.warn(data);
        return (
          //   <View>
          <Text style={{ color: "black", fontSize: 12, height: 12 }}>
            {data.title}
          </Text>
          //   </View>
        );
      });
    }
  };

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={toggleDropdown}>
        <Text style={{ color: "#9B96AB", fontSize: 18 }}>{label}</Text>
        {/* <Icon style={styles.iconStyle} name="chevron-down" size={25} /> */}
      </TouchableOpacity>
      {visible ? (
        <Modal visible={visible} transparent animationType="none">
          {array.map((data) => {
            return (
              <Text style={{ color: "#9B96AB", fontSize: 18 }}>
                {data.title}
              </Text>
            );
          })}
        </Modal>
      ) : (
        <Text></Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 25,
    borderBottomWidth: 2,
    paddingLeft: 5,
    borderColor: "#D2C2FF",
    color: "#9B96AB",
    fontSize: 18,
    marginVertical: 8,
  },
  dropdown: {
    position: "absolute",
    backgroundColor: "#fff",
    top: 50,
  },
});

export default Dropdown;
