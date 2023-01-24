/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function TitleFrameComponent(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="360px"
      height="337px"
      justifyContent="space-between"
      alignItems="flex-start"
      position="relative"
      padding="10px 11px 10px 11px"
      {...getOverrideProps(overrides, "TitleFrameComponent")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="36px"
        fontWeight="700"
        color="rgba(255,28,28,1)"
        lineHeight="43.568180084228516px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Menu&#xA;Name"
        {...getOverrideProps(overrides, "Menu\nName")}
      ></Text>
    </Flex>
  );
}
