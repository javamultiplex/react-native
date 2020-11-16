import React, { useReducer } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    //state==={counter:number}
    //action==={type:'INCREASE'||'DECREASE', payload:1}

    switch (action.type) {
        case 'INCREASE':
            return { ...state, counter: state.counter + action.payload };
        case 'DECREASE':
            return { ...state, counter: state.counter - action.payload };
        default:
            return state;
    }
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { counter: 0 })
    const { counter } = state;
    return (
        <View>
            <Button title="Increase" onPress={() => dispatch({ type: 'INCREASE', payload: 1 })} />
            <Button title="Decrease" onPress={() => dispatch({ type: 'DECREASE', payload: 1 })} />
            <Text>Current Counter : {counter}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default CounterScreen;