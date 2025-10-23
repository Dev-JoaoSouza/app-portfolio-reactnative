import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { Skills } from "../screens/Skills";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const BottomTabsRoutes = () => {
    const {Navigator, Screen} = createBottomTabNavigator();

    return(
        <Navigator>
            <Screen
                name="home"
                component={Home}
                options={{
                    title: "Home",
                    tabBarIcon: ({color}) => (<MaterialCommunityIcons name="home" size={24} color={color} />)
                }}
            />
            <Screen
                name="skills"
                component={Skills}
                options={{
                    title: "Habilidades",
                    tabBarIcon: ({color}) => (<MaterialCommunityIcons name="head-cog" size={26} color={color} />),
                    tabBarShowLabel: true
                }}
            />
        </Navigator>    
    )
};

export { BottomTabsRoutes };
