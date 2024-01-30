import { Box, Text } from "utils/themes";
import React from "react";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import { RouteProp, useRoute } from "@react-navigation/native";
import { CategoriesStackParamList } from "@/navigation/types";
import useSWR from "swr";
import Loader from "@/components/shared/loader";
import { fetcher } from "@/services/config";
import { ICategory } from "@/types";
import NavigateBack from "@/components/shared/navigate-back";

type CategoryScreenRouteProp = RouteProp<CategoriesStackParamList, "Category">;

const CategoryScreen = () => {
  const route = useRoute<CategoryScreenRouteProp>();

  const { id } = route.params;

  const { data: category, isLoading: isLoadingCategory } = useSWR<ICategory>(
    `categories/${id}`,
    fetcher
  );

  console.log(`category`, JSON.stringify(category, null, 2));

  const { data, isLoading: isLoadingTasks } = useSWR<ICategory>(
    `tasks/tasks-by-category/${id}`,
    fetcher
  );

  if (isLoadingTasks || isLoadingCategory || !category) {
    return <Loader />;
  }

  return (
    <SafeAreaWrapper>
      <Box flex={1} mx="4">
        <Box width={40}>
          <NavigateBack />
        </Box>
        <Box height={16} />
        <Box flexDirection="row">
          <Text variant="textXl" fontWeight="700">
            {category?.icon.symbol}
          </Text>
          <Text
            variant="textXl"
            fontWeight="700"
            ml="3"
            style={{
              color: category.color.code,
            }}
          >
            {category?.name}
          </Text>
        </Box>
      </Box>
    </SafeAreaWrapper>
  );
};

export default CategoryScreen;
