import { useNavigation } from "@react-navigation/native"
import { Box, Text } from "utils/themes"
import React from "react"
import { Button } from "react-native"
import { AuthScreenNavigationType } from "@/navigation/types"
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper"

const EditTaskScreen = () => {
    return (
        <SafeAreaWrapper>
            <Box>
                <Text>Edit Task</Text>
            </Box>
        </SafeAreaWrapper>
    )
}

export default EditTaskScreen