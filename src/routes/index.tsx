import { NavigationContainer } from "@react-navigation/native";
import { BottomTabsRoutes } from "./botom-tabs.routes";

const Routes = () => {
    return(
        <NavigationContainer>
            <BottomTabsRoutes/>
        </NavigationContainer>
    )
};

export { Routes };