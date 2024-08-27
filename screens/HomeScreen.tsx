import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { Menu, Divider, Provider } from 'react-native-paper';
import ChatList from './ChatList';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  const handleLogout = () => {
    // Implement logout logic
    console.log('Logging out');
    closeMenu();
  };

  return (
    <Provider>
      <View style={styles.container}>
        {/* Top Banner with Hamburger Menu and User Icon */}
        <View style={styles.banner}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon name="menu" size={30} />
          </TouchableOpacity>
          
          <View style={styles.rightIcons}>
            <Menu
              visible={menuVisible}
              onDismiss={closeMenu}
              anchor={
                <TouchableOpacity onPress={openMenu}>
                  <Icon name="user" type="font-awesome" size={30} />
                </TouchableOpacity>
              }
            >
              <Menu.Item onPress={() => {}} title="Profile" />
              <Divider />
              <Menu.Item onPress={handleLogout} title="Logout" />
            </Menu>
          </View>
        </View>

        {/* Chat List below the banner */}
        <View style={styles.chatListContainer}>
          <ChatList navigation={navigation} />
        </View>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#f8f8f8',
    elevation: 4, // For shadow on Android
  },
  rightIcons: {
    flexDirection: 'row',
  },
  chatListContainer: {
    flex: 1,
  },
});

export default HomeScreen;
