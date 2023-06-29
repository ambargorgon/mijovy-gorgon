import { View, Text, Image, Button } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import styles from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../../../constants/Colors";

const Detail = ({ route, navigation }) => {
  const { offer } = route.params

  console.log("offer", offer)

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: offer.image }} />
      <Text style={styles.title}>{offer.title}</Text>
      <Text style={styles.description}>{offer.description}</Text>
      <View style={styles.detailContainer}>
        <View style={styles.question}>
          <Text style={styles.label}>Donde?</Text>
          <Text>{offer.location}</Text>
        </View>
        <View style={styles.question}>
          <Text style={styles.label}>Por cuanto?</Text>
          {offer.price === 0 ?
            <Text>Gratis</Text>
            :
            <Text>{offer.price} al mes</Text>}
        </View>
        <View style={styles.question}>
          <Text style={styles.label}>Para quienes?</Text>
          <Text>{offer.target}</Text>
        </View>
      </View>
      <View style={styles.contactContainer}>
        <Text style={{ fontSize: 20, alignSelf: 'center' }}>Contacto</Text>
        <View style={styles.dataContainer}>
          <Ionicons name="at" color={Colors.primary} size={25} />
          <Text>{offer.email}</Text>
        </View>
        <View style={styles.dataContainer}>
          <Ionicons name="call" color={Colors.primary} size={25} />
          <Text>{offer.celular}</Text>
        </View>
        <View style={styles.dataContainer}>
          <Ionicons name="person" color={Colors.primary} size={25} />
          <Text>{offer.author}</Text>
        </View>
      </View>
    </View>
  );
};

export default Detail;
