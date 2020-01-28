import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput,
  Button} from 'react-native';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
    //this.handleChangeText = this.handleChangeText.bind(this)
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name] : event.target.value });
  }


  //handleChangeText(newText) {
    //this.setState({
      //value: newText
    //})
  //}

  render(){
    return (
      <View style={styles.container}>
        <TextInput
        name="firstName"
        placeholder="Name"
        firstName={this.state.firstName} 
        onChange={this.handleChange}
        style={styles.textBox}
        />
        <TextInput
        name="surname"
        placeholder="Surname"
        surname={this.state.surname} 
        onChange={this.handleChange}
        style={styles.textBox}
        />
        <TextInput
        name="email"
        placeholder="Email"
        email={this.state.email} 
        onChange={this.handleChange}
        style={styles.textBox}
        />
        <TextInput
        name="password"
        placeholder="Password"
        password={this.state.password} 
        onChange={this.handleChange}
        style={styles.textBox}
        secureTextEntry
        />
        <TextInput
        name="confirmPassword"
        placeholder="Confirm password"
        confirmPassword={this.state.confirmPassword} 
        onChange={this.handleChange}
        style={styles.textBox}
        secureTextEntry
        />

        <View >
          <Button 
          onPress={() => {
            alert(
              'Your details are: \n' +
              this.state.firstName + '\n' +  
              this.state.surname + '\n' +
              this.state.email + '\n' 
              );
          }}
          title="Register"
          style={styles.button}
          />
        </View>
        
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
    
  },

  textBox: {
    height: 50,
    backgroundColor: 'white',
    marginBottom: 20,
    paddingHorizontal: 15,
    fontSize: 15,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#ff3333',
    width: 250
},

  button: {
    height: 50,
    backgroundColor: '#ff3333',
    width: 100,
    borderRadius: 6
  }
});
