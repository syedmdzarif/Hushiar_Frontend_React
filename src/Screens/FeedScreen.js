import React from "react";
import { Button, Text, View, FlatList, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import ProductCard from "../Components/ProductCard";


const FeedScreen = (props) => {
  return (

       <SafeAreaView style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
      <View style={styles.sideways}>
        <Text style={styles.homeText}>Feed</Text>


   
       

        <TouchableOpacity onPress={() => {
            props.navigation.navigate("Crime");
          }}>
       
            <View style={styles.buttonComplaints}>
                <Text style={styles.buttonText}>Complaint</Text>
               
            </View>

         
            

        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
            props.navigation.navigate("Profile");
          }}>
       
            <View style={styles.buttonProfile}>
                <Text style={styles.buttonText}>Profile</Text>
               
            </View>

         
            

        </TouchableOpacity>


        
  
        <TouchableOpacity onPress={() => {
            props.navigation.navigate("Login");
          }}>
       
            <View style={styles.buttonLog}>
                <Text style={styles.buttonText}>Log Out</Text>
               
            </View>

        
           
            

        </TouchableOpacity>


        


        </View>




        

         




            





           


        <ScrollView>

        <View style={styles.complaints}>
                  

            <View style={styles.historyButton}>

                  <View style={styles.history}>
                 
                      <Text>Complaint ID: #23</Text>
                      <Text>Date: 29/05/22 04:23 PM</Text>
                      <Text>Category: Harassment</Text>
                      <Text>Location: East Motijheel</Text>
                     


                  </View>


                  <TouchableOpacity onPress={() => {
                  props.navigation.navigate("View");
                 }}>
       
            <View style={styles.button3}>
                <Text style={styles.buttonText}>View Details</Text>
               
            </View>


        </TouchableOpacity>

            </View>















            <View style={styles.historyButton}>

                  <View style={styles.history}>
                 
                      <Text>Complaint ID: #23</Text>
                      <Text>Date: 29/05/22 04:23 PM</Text>
                      <Text>Category: Harassment</Text>
                      <Text>Location: East Motijheel</Text>
                     


                  </View>


                  <TouchableOpacity onPress={() => {
                  props.navigation.navigate("View");
                 }}>
       
            <View style={styles.button3}>
                <Text style={styles.buttonText}>View Details</Text>
               
            </View>


        </TouchableOpacity>

            </View>
















            <View style={styles.historyButton}>

<View style={styles.history}>

    <Text>Complaint ID: #23</Text>
    <Text>Date: 29/05/22 04:23 PM</Text>
    <Text>Category: Harassment</Text>
    <Text>Location: East Motijheel</Text>
   


</View>


<TouchableOpacity onPress={() => {
props.navigation.navigate("View");
}}>

<View style={styles.button3}>
<Text style={styles.buttonText}>View Details</Text>

</View>


</TouchableOpacity>

</View>














<View style={styles.historyButton}>

                  <View style={styles.history}>
                 
                      <Text>Complaint ID: #23</Text>
                      <Text>Date: 29/05/22 04:23 PM</Text>
                      <Text>Category: Harassment</Text>
                      <Text>Location: East Motijheel</Text>
                     


                  </View>


                  <TouchableOpacity onPress={() => {
                  props.navigation.navigate("View");
                 }}>
       
            <View style={styles.button3}>
                <Text style={styles.buttonText}>View Details</Text>
               
            </View>


        </TouchableOpacity>

            </View>











            <View style={styles.historyButton}>

<View style={styles.history}>

    <Text>Complaint ID: #23</Text>
    <Text>Date: 29/05/22 04:23 PM</Text>
    <Text>Category: Harassment</Text>
    <Text>Location: East Motijheel</Text>
   


</View>


<TouchableOpacity onPress={() => {
props.navigation.navigate("View");
}}>

<View style={styles.button3}>
<Text style={styles.buttonText}>View Details</Text>

</View>


</TouchableOpacity>

</View>











<View style={styles.historyButton}>

                  <View style={styles.history}>
                 
                      <Text>Complaint ID: #23</Text>
                      <Text>Date: 29/05/22 04:23 PM</Text>
                      <Text>Category: Harassment</Text>
                      <Text>Location: East Motijheel</Text>
                     


                  </View>


                  <TouchableOpacity onPress={() => {
                  props.navigation.navigate("View");
                 }}>
       
            <View style={styles.button3}>
                <Text style={styles.buttonText}>View Details</Text>
               
            </View>


        </TouchableOpacity>

            </View>












            <View style={styles.historyButton}>

<View style={styles.history}>

    <Text>Complaint ID: #23</Text>
    <Text>Date: 29/05/22 04:23 PM</Text>
    <Text>Category: Harassment</Text>
    <Text>Location: East Motijheel</Text>
   


</View>


<TouchableOpacity onPress={() => {
props.navigation.navigate("View");
}}>

<View style={styles.button3}>
<Text style={styles.buttonText}>View Details</Text>

</View>


</TouchableOpacity>

</View>














<View style={styles.historyButton}>

                  <View style={styles.history}>
                 
                      <Text>Complaint ID: #23</Text>
                      <Text>Date: 29/05/22 04:23 PM</Text>
                      <Text>Category: Harassment</Text>
                      <Text>Location: East Motijheel</Text>
                     


                  </View>


                  <TouchableOpacity onPress={() => {
                  props.navigation.navigate("View");
                 }}>
       
            <View style={styles.button3}>
                <Text style={styles.buttonText}>View Details</Text>
               
            </View>


        </TouchableOpacity>

            </View>












            <View style={styles.historyButton}>

<View style={styles.history}>

    <Text>Complaint ID: #23</Text>
    <Text>Date: 29/05/22 04:23 PM</Text>
    <Text>Category: Harassment</Text>
    <Text>Location: East Motijheel</Text>
   


</View>


<TouchableOpacity onPress={() => {
props.navigation.navigate("View");
}}>

<View style={styles.button3}>
<Text style={styles.buttonText}>View Details</Text>

</View>


</TouchableOpacity>

</View>













<View style={styles.historyButton}>

                  <View style={styles.history}>
                 
                      <Text>Complaint ID: #23</Text>
                      <Text>Date: 29/05/22 04:23 PM</Text>
                      <Text>Category: Harassment</Text>
                      <Text>Location: East Motijheel</Text>
                     


                  </View>


                  <TouchableOpacity onPress={() => {
                  props.navigation.navigate("View");
                 }}>
       
            <View style={styles.button3}>
                <Text style={styles.buttonText}>View Details</Text>
               
            </View>


        </TouchableOpacity>

            </View>




                  

           
                  

        </View>

        </ScrollView>

    </SafeAreaView>
  );
};

export default FeedScreen;


const styles = StyleSheet.create({


  historyButton:{
    flexDirection:"row",
    borderWidth:0.5,
    marginTop:10,
    padding:10
  },


  history:{
    
      
      
  },

  complaints:{
      marginLeft:10,
      marginRight:10,
      padding:10,
      borderWidth:0,

  },

  nameText:{
      fontSize:16,
      fontWeight:"bold"
  },

  button2:{
    borderRadius: 4,
    
    padding: 12,
    backgroundColor: "#3498DB",
    width: 100,
    height: 45,
    marginLeft:125,
    marginTop:30
  
      
      
    },

    button3:{
      borderRadius: 4,
      
      padding: 12,
      backgroundColor: "#3498DB",
      width: 120,
      height: 45,
      marginLeft:60,
      marginTop:4
    
        
        
      },
  


  imgBox:{
    margin:10,
    borderWidth:1,
    borderColor:"black",
    padding:10

  },

  textProfile:{
      marginLeft:20
  },

  imgSideways:{
      flexDirection: "row"
  },

  imgStyle:{
    width:120,
    height:140
  
  },
 

  
homeText:{
  fontSize:35,
  
  color: "white",
  padding: 10

  
  
}, 

  buttonText:{

    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  

  sideways:{
    flexDirection:"row",
    backgroundColor: "#3498DB",
    
    
  
  },

  img:{
      height:20,
      width:20
  },

  buttonUpdate:{
    borderRadius: 50,
    
   
    width: 97,
    height: 35,
    paddingTop: 8,
    marginLeft: 20,
    marginTop: 16,
  
    
  },

  buttonComplaints:{
    borderRadius: 50,

   
    width: 80,
    height: 35,
    paddingTop: 8,
    marginLeft: 100,
    marginTop: 16,
  
    
  },

  buttonLog:{
    borderRadius: 50,
    padding: 5,
    
    width: 70,
    height: 35,
    paddingTop: 8,
    
    marginTop: 16,
  
  
  
    
  },

  
  buttonProfile:{
    borderRadius: 50,


    width: 50,
    height: 35,
    paddingTop: 8,
    
    marginTop: 16,
    marginLeft:5

  },
})
  