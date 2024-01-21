import axiosInstance, { BASE_URL, BLOSSOM_TOKEN_NAME, saveToken } from "./config"
import { addMock } from "./mock-axios"

type RegisterUserTypes = IUser

export const registerUser = async ({
    email,
    name,
    password,
}: RegisterUserTypes) => {
    try {
        addMock(BASE_URL+'/users/create', { data: { token: 'dogs' } })

        const response = await axiosInstance.post("/users/create", {
            email, password, name,
        })
        const _token = response.data._token
        console.log("Token fetched")
        console.log(_token)
        return response.data.user
    } catch (error) {
        console.log("error in registerUser", error)
        throw error
    }
}

type LoginUserTypes = Omit<IUser, "name">

export const loginUser = async ({
    email,
    password,
}: LoginUserTypes) => {
    try {
        addMock(BASE_URL+'/users/login', { data: { token: 'dogs' } })

        const response = await axiosInstance.post("/users/login", {email, password})
        const _token = response.data._token
        console.log("Token fetched")
        console.log(_token)
        saveToken(BLOSSOM_TOKEN_NAME, _token)
        return response.data.user
    } catch (error) {
        console.log("error in registerUser", error)
        throw error
    }
}