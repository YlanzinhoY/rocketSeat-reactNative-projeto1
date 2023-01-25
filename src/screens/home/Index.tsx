import { Text, View, Linking, TextInput, TouchableOpacity, FlatList, Alert} from "react-native";
import { styles } from "./style";

import { Participant } from "../../components/Participant";

export function Home(){
    const participants = ["Javascript", "java", "ruby", "php", "python", "kotlin", "lua", "elixir"]

    function handleParticipantAdd() {
        if(participants.includes("Javascript")){
            return Alert.alert("lang existente!", "Não é possivel add a mesma lang")
        }
    }

    function handleRemoveParticipant(name: string){
        Alert.alert(
            "Deseja remover?", 
            `Tem certeza que deseja remover ${name}?`, [
                {
                    text: 'Sim',
                    onPress: () => Alert.alert("Deletado!")
                },
                {
                    text: 'Não',
                    style: 'cancel'
                }
            ])
    }

  return(
    <View style={styles.container}>
        <Text style={styles.eventName}>Evento das Linguagens</Text>

        <Text style={styles.eventDate}>
            terça, 24 de janeiro de 2023
        </Text>

        <View style={styles.form}>
            <TextInput
            placeholder="Nome da linguagem"
            style={styles.input}
            placeholderTextColor='#ffff'
            >
            </TextInput>
            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>

        <FlatList 
            data={participants}
            keyExtractor={(item) => item}
            renderItem={({item}) => (
                <Participant key={item}
                    nome={item}
                    onRemove={() => handleRemoveParticipant(item)}
                    />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() =>  (
                <Text style={styles.textListEmpty}>
                    Lista de linguagens vazia... adicione uma para começar
                </Text>
            )}
        />

    </View>

    
  )
}

