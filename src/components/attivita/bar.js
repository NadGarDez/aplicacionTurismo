import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from "react-native-vector-icons/Entypo";
import Icon3 from "react-native-vector-icons/Ionicons";
import Icon4 from "react-native-vector-icons/MaterialIcons";
import Icon5 from "react-native-vector-icons/Fontisto";
import PropTypes from "prop-types";
import {Alert,StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight, ImageBackground, Dimensions, Image} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';
import Absolute from 'react-native-absolute';
export default class Content extends Component {

  /*
    props:
      objDat={
        resena

      }


  */

  constructor(props) {
        super(props);
        this.state = {

        };

        this.alto = Dimensions.get('window').height,
        this.ancho = Dimensions.get('window').width,
        this.altoComponente = 20 * this.alto;
        this.altoComponente = this.altoComponente / 100;


    }

  render(){

    misEstilos ={
      padre:{
        "width":this.ancho,
        height:this.altoComponente,
        "display":"flex",
        "flexDirection":"row",
        "flexWrap":"wrap",


      },
      "hijo":{
        display:"flex",
        height:"100%",
        width:"50%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
      },
      "attivita_raggruppa39_rettangolo12": {
        "opacity": 1,

        "backgroundColor": "rgba(35, 171, 224, 1)",

        "borderTopLeftRadius": 15,
        "borderTopRightRadius": 15,
        "borderBottomLeftRadius": 15,
        "borderBottomRightRadius": 15,
        "width": "80%",
        "height": "50%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"

      },
      "attivita_raggruppa36_x0172430185": {
        "opacity": 1,

        "backgroundColor": "rgba(255, 255, 255, 0)",
        "color": "rgba(25, 25, 25, 1)",
        "fontSize": 15,
        "fontWeight": "700",
        "fontStyle": "normal",
        "fontFamily": "Montserrat",
        "textAlign":"center",
        marginLeft:"5%",
        marginRight:"5%"


      },
      "contenedorIcono":{
        width:"25%",
        height:"100%",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
      },
      contenedorIconos:{
        display:"flex",
        height:"100%",
        width:"50%",
        flexDirection:"row",
        alignItems:"center",

      }


    }


    return (
      <View style={misEstilos.padre}>
        <View style={misEstilos.hijo}>
          <View data-layer="e75b63dd-cc5c-4763-9675-68dc0336f458" style={misEstilos.attivita_raggruppa39_rettangolo12}>
            <Icon name="phone" color="black" size={20} style={{marginLeft:"5%",marginRight:"5%"}}/>
            <Text style={misEstilos.attivita_raggruppa36_x0172430185}>Appelez{"\n"}Nous</Text>
          </View>
        </View>
        <View style={misEstilos.contenedorIconos}>
        {
          this.props.datos.services.map(
            (item)=>{
              switch (item[0]) {
                case 'restaurant':

                  return(
                    <View style={misEstilos.contenedorIcono}>
                      <Icon4 name={item[0]} size={20} color={item[1] ? "rgba(35, 171, 224, 1)" : "grey" }/>
                    </View>
                  )
                break;
                case 'room-service':

                  return(
                    <View style={misEstilos.contenedorIcono}>
                      <Icon4 name={item[0]} size={20} color={item[1] ? "rgba(35, 171, 224, 1)" : "grey" }/>
                    </View>
                  )

                break

                case 'sait-boat':

                  return(
                    <View style={misEstilos.contenedorIcono}>
                      <Icon5 name={item[0]} size={20} color={item[1] ? "rgba(35, 171, 224, 1)" : "grey" }/>
                    </View>
                  )

                break;

                case "bank":

                  return(
                    <View style={misEstilos.contenedorIcono}>
                      <Icon name={item[0]} size={20} color={item[1] ? "rgba(35, 171, 224, 1)" : "grey" }/>
                    </View>
                  )

                break;

              }

            }
          )


        }
        </View>

      </View>
    );
  }

}