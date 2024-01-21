import { useNavigation } from "@react-navigation/native"
import { Box, Text } from "utils/themes"
import React from "react"
import { AuthScreenNavigationType } from "@/navigation/types"
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper"
import Button from "@/components/shared/button"
import Input from "@/components/shared/input"
import { Pressable } from "react-native/Libraries/Components/Pressable/Pressable"
import { useForm } from "react-hook-form"
import useUserGlobalStore from "@/store/useUserGlobalStore"

const SignInScreen = () => {
    const navigation = useNavigation<AuthScreenNavigationType<"SignIn">>();
    const navigateToSignInScreen = () => {
        navigation.navigate("SignUp")
    }
    const {updateUser} = useUserGlobalStore()

    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm<Omit<IUser, "name">>({
        defaultValues:{
            email: "",
            password: "",
        }
    })
    
    const onSubmit = async (data: Omit<IUser, "name">) => {
        try {
            const {email, password} = data
            console.log(`data`, JSON.stringify(data, null, 2))
            // await registerUser({
            //     email,
            //     name, 
            //     password,
            // })
            updateUser({
                email: email,
                name: "Sourabh"
            })
        } catch (error) {}
    }

    return (
        <SafeAreaWrapper>
            <Box flex={1} px="5.5" mt={"13"} justifyContent="center">
                <Text variant="textXl" fontWeight="700">Welcome Back</Text>
                <Text variant="textXl" fontWeight="700" mb="6">Your journey starts here</Text>
                <Input label="Email" placeholder="Email" />
                <Box mb="6" />
                <Input label="Password" placeholder="Password" />
                <Box height={44} />
                <Button label="Register" onPress={navigateToSignInScreen} />
                <Box height={10} />
                <Button label="Login" onPress={handleSubmit(onSubmit)} />
            </Box>
        </SafeAreaWrapper>
    )
}

export default SignInScreen