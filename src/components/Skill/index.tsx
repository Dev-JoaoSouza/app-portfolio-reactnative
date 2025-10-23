import { View, Text } from "react-native"
import { ISkill } from "./types";
import { styles } from "./styles";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Skill = ({name, level}: ISkill) => {
    const skills = [];
    const levelSkill = level > 5 ? 5 : level;

    for(let i = 0; i < 5; i++) {
        if (i < levelSkill) {
            skills.push(true);
        } else {
            skills.push(false);
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.skillName}>{name}:</Text>
            <View style={styles.skillStars}>
                {skills.map((skill, index) => {
                    if (skill) {
                        return <MaterialCommunityIcons name="star" size={24} color="gold" key={index}/>
                    } else {
                        return <MaterialCommunityIcons name="star-outline" size={24} color="black" key={index}/>
                    }
                })}
            </View>
        </View>
    )
};

export { Skill };