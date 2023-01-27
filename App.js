import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  const [numArray, setNumArray] = useState(['L', 'O', 'T', 'T', 'O', '!']);

  const gen = () => {
    const tempNumArray= []; // 임시로 쓸 공간을 하나 만들고(tempNumArray)
    while (tempNumArray.length < 6) { // 공간의 값이 6개보다 적게 모였을 때
        let num = Math.floor(Math.random() * 45) + 1; // 1~46 중에 하나를 랜덤으로 뽑아서
        if (tempNumArray.indexOf(num) === -1) { // tempNumArray에 있는 값과 중복되는 숫자가 없을시에
            tempNumArray.push(num)// 랜덤으로 뽑은 값을 lottoNumbers에 넣어 줍니다.
        }
    }
    setNumArray(tempNumArray); // tempNumArray에 값이 6개 모였으니 화면에 표시할 공간인 numArray에 넣어줍니다.
}

  return (
    <View style={{
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    }}>

      <View style={{
        width: '100%',
        margin: 20,
        flexDirection: 'row', // 가로로 정렬
        justifyContent: 'space-around' // 맞춤 방식 설정
      }}>
        <View style={styles.numBorder}>
          <Text>{numArray[0]}</Text>
        </View>
        <View style={styles.numBorder}>
          <Text>{numArray[1]}</Text>
        </View>
        <View style={styles.numBorder}>
          <Text>{numArray[2]}</Text>
        </View>
        <View style={styles.numBorder}>
          <Text>{numArray[3]}</Text>
        </View>
        <View style={styles.numBorder}>
          <Text>{numArray[4]}</Text>
        </View>
        <View style={styles.numBorder}>
          <Text>{numArray[5]}</Text>
        </View>   
      </View>

      <Button title='Generate' onPress={gen} />
    </View>
  )
};


const styles = StyleSheet.create({
  numBorder: {
    width: 40,
    height: 40,
    borderRadius: 40,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
export default App;