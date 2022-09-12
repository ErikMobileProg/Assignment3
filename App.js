import { StyleSheet, Text, View, Button, TextInput, FlatList, SafeAreaView } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const convertedInput1 = parseInt(input1);
  const convertedInput2 = parseInt(input2);

  const [result, setResult] = useState('');

  const [data, setData] = useState([]);

  const buttonHandlerAdd = () => {
    setResult(convertedInput1 + convertedInput2);
    setData([...data, { key: input1 + ' + ' + input2 + ' = ' + (convertedInput1 + convertedInput2)}]);
  }

  const buttonHandlerSub = () => {
    setResult(convertedInput1 - convertedInput2);
    setData([...data, { key: input1 + ' - ' + input2 + ' = ' + (convertedInput1 - convertedInput2)}]);
  }

  return (
    <View style={styles.container}>

      <View style={styles.div1}>

        <Text style={styles.text}>
          Result: {result}
        </Text>

        <TextInput
          style={styles.textInput}
          keyboardType='numeric'
          onChangeText={input1 => setInput1(input1)}
        />

        <TextInput
          style={styles.textInput}
          keyboardType='numeric'
          onChangeText={input2 => setInput2(input2)}
        />

      </View>

      <View style={styles.div2}>

        <View style={styles.button1}>
          <Button title='+' onPress={buttonHandlerAdd} />
        </View>

        <View style={styles.button2}>
          <Button title='-' onPress={buttonHandlerSub} />
        </View>

      </View>

      <View style={styles.div3}>

        <Text style={styles.text}>
          History
        </Text>

        <SafeAreaView style={styles.list}>
          <FlatList
            data={data}
            renderItem={({ item }) => <Text>{item.key}</Text>}
            keyExtractor={(item, index) => index.toString()}
          />
        </SafeAreaView>

      </View>

    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150
  },
  textInput: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  },
  text: {
    fontWeight: 'bold', 
    fontSize: 20
  },
  div1: {
    alignItems: 'center', 
    marginBottom: 20 
  },
  div2: {
    flexDirection: 'row'
  },
  div3: {
    marginTop: 50
  },
  button1: {
    height: 50, 
    width: 30, 
    marginRight: 10
  },
  button2: {
    height: 50, 
    width: 30, 
    marginLeft: 10
  },
  list: {
    alignItems: 'center'
  }

});
