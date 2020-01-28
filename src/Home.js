
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Home screen</Text>
                <Button 
                title="Sign up"
                onPress={() => 
                this.props.navigation.navigate('Register')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        alignItems: 'center'
        
      }
})

