/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Icon, Image, Text, View } from "@aws-amplify/ui-react";
import Group from "./Group";
import Useralt from "./Useralt";
import FSACLogo from "./FSACLogo";
export default function AndroidLargeMainMenu(props) {
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
      {...getOverrideProps(overrides, "AndroidLargeMainMenu")}
      {...rest}
    >
      <Image
        width="360px"
        height="305px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://images.unsplash.com/photo-1510637858650-c3be04731622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        {...getOverrideProps(overrides, "ScubaBackImage")}
      ></Image>
      <Icon
        width="360px"
        height="563px"
        viewBox={{ minX: 0, minY: 0, width: 360, height: 563 }}
        paths={[
          {
            d: "M0 32C0 14.3269 14.3269 0 32 0L328 0C345.673 0 360 14.3269 360 32L360 563L0 563L0 32Z",
            fill: "rgba(255,255,255,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="29.69%"
        bottom="-0.06%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Rectangle 1")}
      ></Icon>
      <Button
        width="360px"
        height="63px"
        justifyContent="flex-start"
        position="absolute"
        top="288px"
        left="0px"
        size="large"
        isDisabled={false}
        variation="primary"
        children="View Members"
        {...getOverrideProps(overrides, "Button36673022")}
      ></Button>
      <Button
        width="360px"
        height="63px"
        justifyContent="flex-start"
        position="absolute"
        top="390px"
        left="0px"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Add Member"
        {...getOverrideProps(overrides, "Button36673038")}
      ></Button>
      <Group
        width="46px"
        height="46px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="37.13%"
        bottom="57.13%"
        left="84.72%"
        right="2.5%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Group")}
      ></Group>
      <Text
        fontFamily="Inter"
        fontSize="36px"
        fontWeight="700"
        color="rgba(255,0,0,1)"
        lineHeight="43.568180084228516px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="10px"
        left="8px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="FSAC &#xA;Members and&#xA;Equipment App"
        {...getOverrideProps(overrides, "FSAC Members and Equipment App")}
      ></Text>
      <Useralt
        width="46px"
        height="46px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="49.88%"
        bottom="44.38%"
        left="84.72%"
        right="2.5%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "User_alt")}
      ></Useralt>
      <FSACLogo
        width="84px"
        height="73px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="10px"
        left="265px"
        padding="0px 0px 0px 0px"
        src="https://divencr.club/wp-content/uploads/2022/03/Proof_6-300x262.png"
        {...getOverrideProps(overrides, "FSACLogo")}
      ></FSACLogo>
    </View>
  );
}
