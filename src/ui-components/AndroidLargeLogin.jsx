/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function AndroidLargeLogin(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="360px"
      height="800px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "AndroidLargeLogin")}
      {...rest}
    >
      <Flex {...getOverrideProps(overrides, "TitleFrame Component")}></Flex>
      <Flex {...getOverrideProps(overrides, "NavigationFrame")}></Flex>
      <Flex {...getOverrideProps(overrides, "TextField")}></Flex>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24.204544067382812px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="35.38%"
        bottom="61.63%"
        left="13.89%"
        right="13.61%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Enter your login information"
        {...getOverrideProps(overrides, "Enter your login information")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="24.204544067382812px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="89.13%"
        bottom="7.88%"
        left="42.5%"
        right="42.22%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Login"
        {...getOverrideProps(overrides, "Login")}
      ></Text>
      <Flex {...getOverrideProps(overrides, "PasswordField")}></Flex>
      <Flex {...getOverrideProps(overrides, "Button")}></Flex>
    </View>
  );
}
