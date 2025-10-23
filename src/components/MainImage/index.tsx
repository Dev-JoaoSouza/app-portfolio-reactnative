import { Image } from "react-native";
import { styles } from "./styles";
import imgUser from "../../../assets/user.jpg";

const MainImage = () => {
    return(
        <Image style={styles.image} source={imgUser} />
    )
};

export { MainImage };