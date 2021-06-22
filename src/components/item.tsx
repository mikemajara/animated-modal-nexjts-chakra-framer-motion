import React from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import { LoremIpsum } from "react-lorem-ipsum";
import { items } from "../data/data";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Heading,
} from "@chakra-ui/react"
import { ABox, AHeading, AModal, AModalBody, AModalContent, AModalOverlay, AText } from "./chakra-animated-components";

export function Item({ id }) {
  const { category, title } = items.find((item) => item.id === id);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  return (
    <>
    <AnimateSharedLayout>
      <ABox
        p="8"
        justify="start"
        borderRadius="20px"
        borderColor="gray.200"
        borderStyle="solid"
        borderWidth="1px"
        layoutId={`container-${id}`}
      >
      <AHeading 
        layoutId={`heading-${id}`} onClick={onOpen}>
          Modal Title
      </AHeading>
      {/* <AText
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      >{text}</AText>     */}
      </ABox>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}
      <AModal isOpen={isOpen} onClose={onClose}>
        <AModalOverlay />
        <AModalContent layoutId={`container-${id}`} exit={{opacity: 0}}>
          <ModalHeader>
            <AHeading layoutId={`heading-${id}`}>Modal Title</AHeading>
          </ModalHeader>
          <ModalCloseButton />
          <AModalBody animate>
            {text}
          </AModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </AModalContent>
      </AModal>
    </AnimateSharedLayout>
  </>
  );
}
