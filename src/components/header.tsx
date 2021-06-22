import React from "react";
import { Stack, Flex, Text, Heading, HStack, useColorModeValue } from "@chakra-ui/react";
import { LoremIpsum, Avatar } from "react-lorem-ipsum";
import { DarkModeSwitch } from "./DarkModeSwitch";

export default function Header() {
  return (
    <Flex
      w="full"
      px="5"
      py="3"
      position="fixed"
      top="0"
      background={useColorModeValue("gray.50", "gray.900")}
      justify="space-between"
      align="center"
    >
      <HStack id="left-header">
        <Heading as="h1">Logo</Heading>
      </HStack>
      <HStack id="right-header" spacing="2">
        <DarkModeSwitch />
        <Avatar
          style={{
            width: "55px",
            height: "55px",
            borderRadius: "50px",
          }}
        />
      </HStack>
    </Flex>
  );
}
