
import React, { Component } from 'react';

import { View, Text, TextInput, Button } from 'react-native';

export default class App extends Component {
    constructor(){
        super();
        this.state={massa:'',tinggi:'',hasil:''}
        }
    render() {
      var Diagnosa = this.state.hasil;
      function IMT(){
        if (Diagnosa < 18.5) { return (Diagnosa = 'BERAT BADAN ANDA KURANG'); }
        if (Diagnosa >= 18.5 && Diagnosa <= 24.9) { return(Diagnosa = 'BERAT BADAN ANDA IDEAL'); }
        if (Diagnosa >= 25.0 && Diagnosa <= 29.9) { return(Diagnosa = 'BERAT BADAN ANDA BERLEBIH'); }
        if (Diagnosa >= 30.0 && Diagnosa <= 39.9) { return(Diagnosa = 'BERAT BADAN ANDA SANGAT BERLEBIH'); }
        else { return (Diagnosa = 'BERAT BADAN ANDA OBESITAS'); }
        }
      return (
        <View style={{backgroundColor:'lightblue'}}>
          
         <Text style={{
                color:'yellow',
                backgroundColor:'blue',
                fontSize:20,
                textAlign:'center'}}>INDEKS MASSA TUBUH
         </Text>
          
          <Text> Massa(kg) </Text>
         
          <TextInput style={{height:30, fontSize:12}} 
          onChangeText={(input)=>this.setState({massa:parseInt(input)})}/>
          
          <Text> Tinggi(cm) </Text>
         
          <TextInput style={{height:30, fontSize:12}} 
          onChangeText={(input)=>this.setState({tinggi:parseInt(input)/100})}/>
         
          <Button onPress={()=>this.setState({hasil:this.state.massa/(this.state.tinggi*this.state.tinggi)})}
           title='Hitung IMT' color='blue' />

           <Text style={{
                fontSize:20,
                textAlign:'center'}}>Massa Tubuh : 
                
        </Text>
        <Text style={{
                fontSize:20,
                textAlign:'center'}}>{this.state.massa}kg
        </Text>

        <Text style={{
                fontSize:20,
                textAlign:'center'}}>Tinggi Badan :
        </Text>
       
        <Text style={{
                fontSize:20,
                textAlign:'center'}}>{this.state.tinggi} meter
        </Text>
       
       <Text style={{
                fontSize:20,
                textAlign:'center'}}>Indeks Massa Tubuh :
        </Text>
      
        <Text style={{
                fontSize:20,
                textAlign:'center'}}>{this.state.hasil}
        </Text>
      
        <Text style={{
                fontSize:20,
                textAlign:'center'}}>Diagnosa :
                <IMT Diagnosa />
        </Text>
        </View>
    );
  }
}

