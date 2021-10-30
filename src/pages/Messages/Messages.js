import React, {useState, useEffect} from 'react';
import { View, FlatList } from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

import FloatingButton from '../../components/FloatingButton';
import ContentInputModal from '../../modal/ContentInputModal';
import MessageCard from '../../components/MessageCard';
import parseContentData  from '../../utils/parseContentData';
 
import styles from './Messages.style';

const Messages = () => {

    const [inputModalVisible, setInputModalVisible ] = useState(false); 
    const [contentList, setContentList ] = useState([]);

    useEffect(() => {
        database()
            .ref('messages/')
            .on('value', snapshot => {
                const contentData = snapshot.val();

                // if(!contentData) {
                //     return;
                // }    bu kısım bir hataya neden olduğu için aşağıda parseContentData içerisine || {} ekledim...

                const parsedData = parseContentData(contentData || {});
                setContentList(parsedData);
            });
    }, []);

    function handleInputToggle() {
        setInputModalVisible(!inputModalVisible);
    }

    function handleSendContent(content) {
        handleInputToggle();
        sendContent(content);
    }

    function sendContent(content) {
        const userMail = auth().currentUser.email;

        const contentObject = {
            text: content,
            username: userMail.split('@')[0], // username'i almak için 
            date: (new Date()).toISOString(),
            dislike: 0,
        };

        database().ref('messages/').push(contentObject);
    }

    function handleBanane (item) {
        database()
            .ref(`messages/${item.id}/`)
            .update({dislike: item.dislike + 1});
    }

    const renderContent = ({item}) => <MessageCard message={item} onBanane={() => handleBanane(item)} />

    return(
        <View style={styles.container} >

            <FlatList 
                data={contentList}
                renderItem={renderContent}
            />

            <FloatingButton icon="plus" onPress={handleInputToggle} />
            <ContentInputModal 
                visible={inputModalVisible} 
                onClose={handleInputToggle} 
                onSend={handleSendContent}
            />
        </View>
    );
};

export default Messages;