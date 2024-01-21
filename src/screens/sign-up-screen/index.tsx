import { useNavigation } from "@react-navigation/native"
import { Box, Text } from "utils/themes"
import React from "react"
import { AuthScreenNavigationType } from "@/navigation/types"
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper"
import Button from "@/components/shared/button"
import Input from "@/components/shared/input"
import { useForm } from "react-hook-form"
import { registerUser } from "@/services/api"

const SignUpScreen = () => {
    const navigation = useNavigation<AuthScreenNavigationType<"SignUp">>();
    const navigateToSignInScreen = () => {
        navigation.navigate("SignIn")
    }

    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm<IUser>({
        defaultValues:{
            email: "",
            password: "",
        }
    })
    
    const onSubmit = async (data: IUser) => {
        try {
            const {email, name, password} = data
            console.log(`data`, JSON.stringify(data, null, 2))
            // await registerUser({
            //     email,
            //     name, 
            //     password,
            // })
            navigateToSignInScreen()
        } catch (error) {}
    }
 
    return (
        <SafeAreaWrapper>
            <Box flex={1} px="5.5" mt={"13"}>
            <Text variant="textXl" fontWeight="700">Welcome to Blossom! Your journey starts here</Text>
                <Text variant="textXl" fontWeight="700" mb="6">Your journey starts here</Text>
                <Input label="Name" placeholder="Name" />
                <Box mb="6" />
                <Input label="Email" placeholder="Email" />
                <Box mb="6" />
                <Input label="Password" placeholder="Password" />
                <Box height={44} />
                <Button label="Log in?" onPress={navigateToSignInScreen} />
                <Box height={10} />
                <Button label="Register" onPress={handleSubmit(onSubmit)} />
            </Box>
        </SafeAreaWrapper>
    )
}

export default SignUpScreen