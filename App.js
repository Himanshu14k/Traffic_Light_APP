/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const tlColors= [
  {
    one: 'green',
    two: 'white',
    three: 'white',
    four: 'white',
    five: 'white',
    six: 'red',
    seven: 'white',
    eight: 'white',
    nine: 'red',
    ten: 'white',
    eleven: 'white',
    twelve: 'red'
  },
  {
    one: 'white',
    two: 'yellow',
    three: 'white',
    four: 'white',
    five: 'white',
    six: 'red',
    seven: 'white',
    eight: 'white',
    nine: 'red',
    ten: 'white',
    eleven: 'white',
    twelve: 'red'
  },
  {
    one: 'white',
    two: 'white',
    three: 'red',
    four: 'green',
    five: 'white',
    six: 'white',
    seven: 'white',
    eight: 'white',
    nine: 'red',
    ten: 'white',
    eleven: 'white',
    twelve: 'red'
  },
  {
    one: 'white',
    two: 'white',
    three: 'red',
    four: 'white',
    five: 'yellow',
    six: 'white',
    seven: 'white',
    eight: 'white',
    nine: 'red',
    ten: 'white',
    eleven: 'white',
    twelve: 'red'
  },
  {
    one: 'white',
    two: 'white',
    three: 'red',
    four: 'white',
    five: 'white',
    six: 'red',
    seven: 'green',
    eight: 'white',
    nine: 'white',
    ten: 'white',
    eleven: 'white',
    twelve: 'red'
  },
  {
    one: 'white',
    two: 'white',
    three: 'red',
    four: 'white',
    five: 'white',
    six: 'red',
    seven: 'white',
    eight: 'yellow',
    nine: 'white',
    ten: 'white',
    eleven: 'white',
    twelve: 'red'
  },
  {
    one: 'white',
    two: 'white',
    three: 'red',
    four: 'white',
    five: 'white',
    six: 'red',
    seven: 'white',
    eight: 'white',
    nine: 'red',
    ten: 'green',
    eleven: 'white',
    twelve: 'white'
  },
  {
    one: 'white',
    two: 'white',
    three: 'red',
    four: 'white',
    five: 'white',
    six: 'red',
    seven: 'white',
    eight: 'white',
    nine: 'red',
    ten: 'white',
    eleven: 'yellow',
    twelve: 'white'
  },
  
];

const App = () => {
  const [index, setIndex] = useState(0);
  const [time, settime] = useState(0)
  
const onStart=()=> {
    let interval = null;
    interval = setInterval(() => {
      settime((prevSec) => prevSec == 4 ? 0 : prevSec+1)
    }, 1000);
    setInterval(() => {
      setIndex((prevIndex) => prevIndex == 7 ? 0 : prevIndex + 1);
    }, 5000)

  }

  return (
    <View style={styles.container1}>
      <View style={styles.container2}>
        <View style={[styles.container3, {backgroundColor: tlColors[index].three}]}></View>
        <View style={[styles.container3, {backgroundColor: tlColors[index].two}]}></View>
        <View style={[styles.container3, {backgroundColor: tlColors[index].one}]}></View>
      </View>
      <View style={styles.container4}>
      <View style={styles.container5}>
        <View style={[styles.container3, {backgroundColor: tlColors[index].six}]}></View>
        <View style={[styles.container3, {backgroundColor: tlColors[index].five}]}></View>
        <View style={[styles.container3, {backgroundColor: tlColors[index].four}]}></View>
      </View>
      <TouchableOpacity style={styles.btn} activeOpacity={0/7} onPress={() => onStart()}>
        <Text style={styles.title}>Start</Text>
        <Text style={styles.timerText}>{`00:0${time}`}</Text>
      </TouchableOpacity>
      <View style={styles.container5}>
        <View style={[styles.container3, {backgroundColor: tlColors[index].twelve}]}></View>
        <View style={[styles.container3, {backgroundColor: tlColors[index].eleven}]}></View>
        <View style={[styles.container3, {backgroundColor: tlColors[index].ten}]}></View>
      </View>
      </View>
      <View style={styles.container2}>
      <View style={[styles.container3, {backgroundColor: tlColors[index].nine}]}></View>
        <View style={[styles.container3, {backgroundColor: tlColors[index].eight}]}></View>
        <View style={[styles.container3, {backgroundColor: tlColors[index].seven}]}></View>
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 250,
    borderWidth: 2,
    borderRadius: 10,
    padding: 5
  },
  container3: {
    width: 40,
    height: 40,
    borderRadius: 40/2,
    borderWidth: 1,
  },
  container4: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    padding: 20,
  },
  container5: {
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 200,
    borderWidth: 2,
    borderRadius: 10,
    padding: 5
  },
  btn: {
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000'
  },
  timerText: {
    fontWeight: '500',
    color: 'black'
  }
})