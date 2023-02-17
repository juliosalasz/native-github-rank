import React from "react";
import { View, Text, StyleSheet } from "react-native";
import StyledText from "./StyledText";

const RespositoryItem = (props) => {
  return (
    <View key={props.id} style={styles.container}>
      <StyledText fontSize="subheading" fontWeight="bold">
        {props.fullName}
      </StyledText>
      <StyledText>{props.description}</StyledText>
      <StyledText>{props.language}</StyledText>
      <StyledText>Forks: {props.forksCount}</StyledText>
      <StyledText>Stars: {props.stargazersCount}</StyledText>
      <StyledText>Rating: {props.ratingAverage}</StyledText>
      <StyledText>Review Count: {props.reviewCount}</StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
});

export default RespositoryItem;
