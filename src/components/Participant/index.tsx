
import { Text, View, TouchableOpacity } from "react-native";

import { styles } from "./style";

type Props = {
    nome: string,
    onRemove: () => void
}

export function Participant({nome, onRemove}: Props) {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{nome}</Text>
            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    )
}