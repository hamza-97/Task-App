import React, {useState, useRef, useImperativeHandle} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

const CustomInput = React.forwardRef((props, ref) => {
  console.log('Style is :', props);
  const [text, setText] = useState('');
  let textInput = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      textInput.current.focus();
    },
    blur: () => {
      textInput.current.blur();
    },
    getValue: () => {
      return text;
    },
    setValue: text => {
      setText(text);
    },
  }));

  return (
    <TextInput
      ref={textInput}
      keyboardType="default"
      style={{
        backgroundColor: 'whitesmoke',
        marginVertical: 12,
        borderRadius: 12,
        fontSize: 16,
        marginHorizontal: 20,
      }}
      secureTextEntry={props.secureTextEntry}
      theme={{
        colors: {
          primary: 'black',
        },
      }}
      label={props.label}
      left={props.left}
    />
  );
});

export default CustomInput;
