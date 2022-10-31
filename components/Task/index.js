import { View, Text, TouchableOpacity,
    ScrollView, } from "react-native";
import React from "react";
import styles from "./style";
const Task = () => {
  return (
    <ScrollView>
      <TouchableOpacity>
        <View style={styles.item}>
          <View style={styles.square}>
            <Text style={styles.number}>01</Text>
          </View>
          <Text style={styles.content}>Di cho</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.item}>
          <View style={styles.square}>
            <Text style={styles.number}>02</Text>
          </View>
          <Text style={styles.content}>Lau nha</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.item}>
          <View style={styles.square}>
            <Text style={styles.number}>03</Text>
          </View>
          <Text style={styles.content}>Quet rac</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Task;
