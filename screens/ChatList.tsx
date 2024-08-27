import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

interface ChatItem {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
}

const chatData: ChatItem[] = [
  { id: '1', name: 'Ali', lastMessage: 'See you tomorrow!', timestamp: '12:30 PM' },
  { id: '2', name: 'Salma', lastMessage: 'Thanks for the help!', timestamp: '11:45 AM' },
  { id: '3', name: 'Hassan', lastMessage: 'Are we meeting later?', timestamp: 'Yesterday' },
  { id: '4', name: 'Sara', lastMessage: 'Goodnight!', timestamp: 'Yesterday' },
];

const ChatList = ({ navigation }: { navigation: any }) => {
  const renderItem = ({ item }: { item: ChatItem }) => (
    <TouchableOpacity
      style={styles.chatItem}
      onPress={() => navigation.navigate('ChatScreen', { chatId: item.id })}
    >
      <View style={styles.chatInfo}>
        <Text style={styles.chatName}>{item.name}</Text>
        <Text style={styles.lastMessage}>{item.lastMessage}</Text>
      </View>
      <Text style={styles.timestamp}>{item.timestamp}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={chatData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.chatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  chatList: {
    padding: 10,
  },
  chatItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  chatInfo: {
    flex: 1,
  },
  chatName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  lastMessage: {
    fontSize: 14,
    color: '#666',
  },
  timestamp: {
    fontSize: 12,
    color: '#999',
    alignSelf: 'center',
  },
});

export default ChatList;
