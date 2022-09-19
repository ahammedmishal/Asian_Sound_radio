import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {DrawerContentScrollView,DrawerItemList,DrawerItem,} from '@react-navigation/drawer';
import { SIZES } from '../constants/theme';

function CustomDrawer(props) {
    const width = SIZES.width * 0.3;
  
    return (
      <DrawerContentScrollView {...props}>
        <View style={styles.menuContainer}>
          <View>
            <Text>Home</Text>
          </View>
        </View>
      </DrawerContentScrollView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    menuContainer: {
      flex: 1,
      flexDirection: 'row',
  
    },
    menuItemsCard: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    circleContainer: {
      width: 50,
      height: 50,
      borderRadius: 25,
      padding: 10,
    },
  });
  

export default CustomDrawer;