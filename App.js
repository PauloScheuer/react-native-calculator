import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

//array com as operações permitidas
const operations = ['/', '*', '+', '-']

//adiciona ao array.prototype uma função que retorna o último elemento
Array.prototype.last = function () {
  return this[this.length - 1];
};

String.prototype.last = function () {
  return this[this.length - 1];
};

const App = () => {
  const [displayValue, setDisplayValue] = useState('0');//valor do display da calculadora
  const [allNumbers, setAllNumbers] = useState(['']);//array de números presentes na calculadora. Ex: '1+2-55' -> [1,2,55]

  const addDigit = (x) => {
    //verificações pré adição, para casos em que o dígito não é permitido
    if ((x === '.') && (allNumbers.last().includes('.')) ||
      ((displayValue === '0') && operations.includes(x)) ||
      ((operations.includes(displayValue.last()) && operations.includes(x))) ||
      ((x === '.') && operations.includes(displayValue.last())) ||
      ((displayValue.last() === '.') && operations.includes(x))) {
      return;
    }

    //adição (e alteração) do último número presente no display ao allNumbers
    if (operations.includes(x)) {
      const newAllNumbers = [...allNumbers];
      newAllNumbers.push('');
      setAllNumbers(newAllNumbers);
    } else {
      const newAllNumbers = [...allNumbers];
      newAllNumbers[newAllNumbers.length - 1] += x;
      setAllNumbers(newAllNumbers);
    }

    //criação do novo displayValue
    let newDisplayValue;

    if ((displayValue === '0') && (x !== '.')) {
      newDisplayValue = x;
    } else {
      newDisplayValue = displayValue + x;
    }

    setDisplayValue(newDisplayValue)
  }

  const clearMemory = () => {
    setDisplayValue('0');
    setAllNumbers(['']);
  }

  const eraseDigit = () => {
    if (displayValue.length === 1) {
      setDisplayValue('0');
    } else if (displayValue !== '0') {
      const newDisplayValue = displayValue.split('');
      newDisplayValue.pop();
      setDisplayValue(String(newDisplayValue.join('')));
    }
  }

  const doCalc = () => {
    if (!operations.includes(displayValue.last()) &&
      (displayValue.last() !== '.')) {
      const newDisplayValue = eval(displayValue);
      setDisplayValue(String(newDisplayValue));
    }
  }

  return (
    <View style={styles.container}>
      <Display value={displayValue} />
      <View style={styles.buttons}>
        <Button label="c" onClick={clearMemory} size={2} />
        <Button label="x" onClick={eraseDigit} size={1} />
        <Button label="/" operation={true} onClick={() => addDigit('/')} />
        <Button label="7" onClick={() => addDigit('7')} />
        <Button label="8" onClick={() => addDigit('8')} />
        <Button label="9" onClick={() => addDigit('9')} />
        <Button label="*" operation={true} onClick={() => addDigit('*')} />
        <Button label="4" onClick={() => addDigit('4')} />
        <Button label="5" onClick={() => addDigit('5')} />
        <Button label="6" onClick={() => addDigit('6')} />
        <Button label="-" operation={true} onClick={() => addDigit('-')} />
        <Button label="1" onClick={() => addDigit('1')} />
        <Button label="2" onClick={() => addDigit('2')} />
        <Button label="3" onClick={() => addDigit('3')} />
        <Button label="+" operation={true} onClick={() => addDigit('+')} />
        <Button label="0" onClick={() => addDigit('0')} size={2} />
        <Button label="." onClick={() => addDigit('.')} />
        <Button label="=" operation={true} highlight onClick={doCalc} />
      </View>
    </View>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }

})