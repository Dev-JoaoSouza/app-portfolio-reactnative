import { View, Text } from "react-native";
import { styles } from "./styles";
import { MainImage } from "../../components/MainImage";
import { Skill } from "../../components/Skill";
import { LinkButton } from "../../components/LinkButton";

const Skills = () => {
    return(
        <View style={styles.container}>
            <MainImage />
            <Text style={styles.title}>Minhas Habilidades:</Text>
            <Skill name="html" level={5} />
            <Skill name="css" level={4} />
            <Skill name="javascript" level={4} />
            <Skill name="react native" level={3} />
            <LinkButton name="Falar comigo" url="joaogrsouza@live.com" />
        </View>
    )
};

export { Skills };