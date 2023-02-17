import React from "react";

import { Text, StyleSheet } from "react-native";
import Theme from "../theme";

const styles = StyleSheet.create({
  text: {
    fontSize: Theme.fontSizes.body,
    color: Theme.colors.textPrimary,
    fontFamily: Theme.fonts.main,
    fontWeight: Theme.fontWeights.normal,
  },
  colorPrimary: {
    color: Theme.colors.primary,
  },
  colorSecondary: {
    color: Theme.colors.textSecondary,
  },
  bold: {
    fontWeight: Theme.fontWeights.bold,
  },
  subheading: {
    fontSize: Theme.fontSizes.subheading,
  },
});

const StyledText = ({
  children,
  color,
  fontSize,
  fontWeight,
  restOfProps,
  style,
}) => {
  const textStyles = [
    styles.text,
    color === "primary" && styles.colorPrimary,
    color === "secondary" && styles.colorSecondary,
    fontSize === "subheading" && styles.subheading,
    fontWeight === "bold" && styles.bold,
  ];
  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  );
};

export default StyledText;
