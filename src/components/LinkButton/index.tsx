import { Pressable, Text, Linking } from "react-native";
import { styles } from "./styles";
import { ILinkButton } from "./types";

const LinkButton = ({name, url}: ILinkButton) => {
    return(
        <Pressable style={styles.button} onPress={() => Linking.openURL(url)}>
            <Text style={styles.buttonText}>{name}</Text>
        </Pressable>
    )
};

export { LinkButton };