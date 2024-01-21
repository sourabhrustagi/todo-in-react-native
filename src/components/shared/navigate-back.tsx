import { View, Text, Pressable } from "react-native";
import React from "react";
import { Box, Theme } from "utils/themes";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { colors } from "utils/themes/colors";
import { useTheme } from "@shopify/restyle";

const NavigateBack = () => {
  const navigation = useNavigation();
  const theme = useTheme<Theme>();
  const navigateBack = () => {
    navigation.goBack();
  };
  return (
    <Pressable onPress={navigateBack}>
      <Box bg="gray200" p="2" borderRadius="rounded-7xl">
        <Feather name="chevron-left" color={theme.colors.gray9} />
      </Box>
    </Pressable>
  );
};

export default NavigateBack;
