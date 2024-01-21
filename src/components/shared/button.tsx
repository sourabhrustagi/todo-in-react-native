import { Pressable, StyleSheet, View } from "react-native"
import { Box, Text } from "utils/themes"

type ButtonProps = {
    label: string
    onPress: () => void
    disabled?: boolean
}

const Button = ({ label, onPress, disabled }: ButtonProps) => {
    return (
        <Pressable
            onPress={onPress}
            disabled={disabled}
        >
            <Box
                bg={disabled ? "gray800" : "primary"}
                py="3.5"
                borderRadius="rounded-7xl"
            >
                <Text
                    variant="textXs"
                    fontWeight="700"
                    color="white"
                    textAlign="center"
                >{label}</Text>
            </Box>
        </Pressable>
    )
}

export default Button