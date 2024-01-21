import { Box } from "utils/themes"
import SafeAreaWrapper from "./safe-area-wrapper"
import { ActivityIndicator } from "react-native/Libraries/Components/ActivityIndicator/ActivityIndicator"

const Loader = () => {
    return (
        <SafeAreaWrapper>
            <Box flex={1} alignItems="center" justifyContent="center">
                <ActivityIndicator />
            </Box>
        </SafeAreaWrapper>
    )
}
export default Loader