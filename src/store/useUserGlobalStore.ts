import { create } from "zustand"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { createJSONStorage, persist } from "zustand/middleware"

interface IUserGlobalStore {
    user: IAuthenticatedUser | null
    updateUser: (user: IAuthenticatedUser | null) => void
}

const useUserGlobalStore = create<IUserGlobalStore>()(
    persist(
        (set) => ({
            user: null,
            updateUser: (user) => {
                set({
                    user,
                })
            },
        }),
        {
            name: "blossom-application-user-store",
            storage: createJSONStorage(() => AsyncStorage)
        }
    )
)

export default useUserGlobalStore