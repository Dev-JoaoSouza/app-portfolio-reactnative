import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { MainImage } from "../../components/MainImage";
import { LinkButton } from "../../components/LinkButton";

const Home = () => {
    return(
        <View style={styles.container}>
            <MainImage />
            <Text style={styles.name}>João Guilherme</Text>
            <LinkButton name="linkedin" url="https://www.linkedin.com/in/joaosouza-dev/" />
            <LinkButton name="github" url="https://github.com/Dev-JoaoSouza" />
            <LinkButton name="site" url="https://joaodev.site/" />
        </View>
    )
};

export { Home };