import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import theme from '../../styles/theme.ts';

interface ContainerScreenProps {
  children: React.ReactNode;
  title?: string;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.appBackgroundColor,
  },
  childrenContainer: {marginVertical: 12, flex: 1},
  titleText: {fontSize: theme.spacing.XL},
});

const ContainerScreen = ({children, title}: ContainerScreenProps) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          margin: theme.spacing.XL,
          ...styles.container,
        }}>
        <View>{title && <Text style={styles.titleText}>{title}</Text>}</View>
        <View style={styles.childrenContainer}>{children}</View>
      </View>
    </View>
  );
};

export default ContainerScreen;
