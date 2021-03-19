import React, {useState} from 'react'; // useState is a hook
import { FlatList, StyleSheet, View } from 'react-native';

import ListItem from '../components/lists/ListItem';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import Screen from '../components/Screen';
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';

const initialMessages = [
    {
        id: 1,
        title: "Jerry Carney - is the heavy skinny big bad thing that wonders in the woods in cambria county pennsylvania",
        description: "We hold these truths to be self-evident, that all men are created equal, that they are " +
            "endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and " +
            "the pursuit of Happiness.--That to secure these rights, Governments are instituted among Men, " +
            "deriving their just powers from the consent of the governed, --That whenever any Form of Government " +
            "becomes destructive of these ends, it is the Right of the People to alter or to abolish it, and to " +
            "institute new Government, laying its foundation on such principles and organizing its powers in such " +
            "form, as to them shall seem most likely to effect their Safety and Happiness. ",
        image: require("../assets/jerry.png")
    },
    {
        id: 2,
        title: "T2",
        description: "Hello D2",
        image: require("../assets/mosh.jpg")
    },
]

function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages); //setMessages similar to setState in class components
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (message) => {
        // Delete message from the messages array
        setMessages(messages.filter(m => m.id !== message.id)); //returns an array of messages

        // Call the server to delete them message from the back-end
        // TODO
     }

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem   
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("Message selected", item)}
                        renderRightActions={() =>
                            <ListItemDeleteAction onPress={() => handleDelete(item)}/>}
                        showChevrons={true}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 1,
                            title: "Jerry Carney - is the heavy skinny big bad thing that wonders in the woods in cambria county pennsylvania",
                            description: "We hold these truths to be self-evident, that all men are created equal, that they are " +
                            "endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and " +
                            "the pursuit of Happiness.--That to secure these rights, Governments are instituted among Men, " +
                            "deriving their just powers from the consent of the governed, --That whenever any Form of Government " +
                            "becomes destructive of these ends, it is the Right of the People to alter or to abolish it, and to " +
                            "institute new Government, laying its foundation on such principles and organizing its powers in such " +
                            "form, as to them shall seem most likely to effect their Safety and Happiness. ",
                            image: require("../assets/jerry.png")
                        },
                        {
                            id: 2,
                            title: "T2",
                            description: "Hello D2",
                            image: require("../assets/mosh.jpg")
                        },
                    ])
                }}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({

}); 

export default MessagesScreen;