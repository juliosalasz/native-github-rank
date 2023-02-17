import React from "react";
import { View, Text, FlatList } from "react-native";

import RespositoryItem from "./components/RepositoryItem";
import Respositories from "../respositories";

const RepositoryList = () => {
  return (
    <FlatList
      data={Respositories}
      ItemSeparatorComponent={() => <Text></Text>}
      renderItem={({ item }) => <RespositoryItem {...item} />}
    ></FlatList>
  );
};

export default RepositoryList;
