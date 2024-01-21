import { Box, Text } from "utils/themes";
import React, { useState } from "react";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import useSWR from "swr";
import { fetcher } from "@/services/config";
import Loader from "@/components/shared/loader";
import { ICategory } from "@/types";
import { FlatList, StatusBar, TouchableOpacity } from "react-native";
import Category from "@/components/categories/category";
import CreateNewList from "@/components/categories/create-new-list";

const DATA: ICategory[] = [
  {
    _id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "First Item",
    user: "1qs",
    isEditable: true,
    color: { name: "purple700", id: "asd", code: "#22c55e" },
    icon: { name: "seed", id: "123", symbol: "𓇢" },
  },
  {
    _id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    name: "Second Item",
    user: "dft",
    isEditable: true,
    color: { name: "purple500", id: "sdf", code: "#22c55e" },
    icon: { name: "seed", id: "qwe", symbol: "𓇠" },
  },
  {
    _id: "58694a0f-3da1-471f-bd96-145571e29d72",
    name: "Third Item",
    user: "cvg",
    isEditable: true,
    color: { name: "purple600", id: "dfg", code: "#22c55e" },
    icon: { name: "seed", id: "xcv", symbol: "𓋼" },
  },
];

type ItemProps = {
  item: ICategory;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const Item = ({ item, onPress, backgroundColor, textColor }: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[{ backgroundColor }]}>
    <Text style={[{ color: textColor }]}>{item.name}</Text>
  </TouchableOpacity>
);

const CategoriesScreen = () => {
  const { data, isLoading, error } = useSWR<ICategory[]>("categories", fetcher, {
    refreshInterval: 1000
  });
  if (isLoading) {
    return <Loader />;
  }

  const [selectedId, setSelectedId] = useState<string>();

  const renderItem = ({ item }: { item: ICategory }) => {
    return <Category category={item} />;
  };

  return (
    <SafeAreaWrapper>
      <Box flex={1} px="4">
        <Text variant="textXl" fontWeight="700" mb="10">
          Categories
        </Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
          ItemSeparatorComponent={() => <Box height={14}></Box>}
          extraData={selectedId}
          showsVerticalScrollIndicator={false}
        />
        <CreateNewList />
      </Box>
    </SafeAreaWrapper>
  );
};

export default CategoriesScreen;
