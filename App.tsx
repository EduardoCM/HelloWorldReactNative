/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

 import React, {Component} from 'react';
 import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
 
 import axios from 'axios';
 
 class App extends Component {
   constructor(props) {
     super(props);
 
     this.state= {
       cardHolderName: null,
       creditCardNumber: null,
       expirationDate: null,
       paymentNetworks: null,
       cvv: null
     }
 
   }
 
   render(){
 
      const { cardHolderName, creditCardNumber, expirationDate, paymentNetworks, cvv } = this.state;
     return (
       <View>
         <Text style={{fontSize: 20}}>Card Holder Name:</Text>
         <TextInput 
          style={{ borderWidth: 1, height: 50, width: '100%'}}
            value={cardHolderName}
            onChangeText={val => this.setState({cardHolderName: val})}/>
 
          <Text style={{fontSize: 20}}>Credit Card Number:</Text>
          <TextInput
          style={{ borderWidth: 1, height: 50, width: '100%'}}
            value={creditCardNumber}
            onChangeText={val => this.setState({creditCardNumber: val})}/>
 
 
         <Text style={{fontSize: 20}}>Expiration Date:</Text>
         <TextInput
            style={{ borderWidth: 1, height: 50, width: '100%'}}   
            value={expirationDate}
            onChangeText={val => this.setState({expirationDate: val})}/> 
 
         <Text style={{fontSize: 20}}>Payment Networks</Text>
         <TextInput
            style={{ borderWidth: 1, height: 50, width: '100%'}}   
            value={paymentNetworks}
            onChangeText={val => this.setState({paymentNetworks: val})}/>
 
 
         <Text style={{fontSize: 20}}>CVV</Text>
         <TextInput
            style={{ borderWidth: 1, height: 50, width: '100%'}}   
            value={cvv}
            onChangeText={val => this.setState({cvv: val})}/>
 
 
 
     
     <TouchableOpacity
     style={{borderWidth: 1, height: 50, width: '100%', marginTop: 30, justifyContent: 'center', alignItems: 'center', }}
     onPress={() => {
       console.log({cardHolderName, creditCardNumber, expirationDate, paymentNetworks, cvv})
 
      console.log("Inicia ejecucion de Axios2");
 
    console.log('1: ' +  this.state.cardHolderName);
    console.log('2: ' +  this.state.creditCardNumber); 
 
      axios.post('http://10.0.2.2:8085/api/creditcard', {
             cardHolderName: this.state.cardHolderName,
             creditCardNumber: this.state.creditCardNumber,
             cvv: this.state.cvv,
             expirationDate: this.state.expirationDate,
             paymentNetworks: this.state.paymentNetworks
         })
         .then((response) => {
             console.log(response);
         })
         .catch(error => {
           console.log("Error");
           console.log(error);
           console.log("Error 2")
         });
      console.log("Finaliza ejecucion de Axios");
 
     }}
     >
 
 <Text style={{fontSize: 40}}>Save</Text>
   
       </TouchableOpacity>
        
       </View>
     );
   }
 }
 
 
 const styles = StyleSheet.create({
   title: {
     fontSize: 20
   }
 })
 
 
 
 export default App;