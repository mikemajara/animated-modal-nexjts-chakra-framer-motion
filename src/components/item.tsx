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
  Box,
} from "@chakra-ui/react";
import {
  ABox,
  AButton,
  AHeading,
  AModal,
  AModalBody,
  AModalCloseButton,
  AModalContent,
  AModalFooter,
  AModalHeader,
  AModalOverlay,
  AText,
} from "./chakra-animated-components";

const transition = { duration: .2 };

export function Item({ id }) {
  const { category, title } = items.find((item) => item.id === id);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
  return (
    <>
      <AnimateSharedLayout type="switch">
        <ABox
          p="8"
          justify="start"
          onClick={onOpen}
          layoutId={`container-${id}`}
          shadow="md"
          style={{
            // border: "1px solid",
            // borderColor: "gray",
            borderRadius: "10px",
            width: "300px",
            Height: "600px"
          }}
          position="relative"
          animate={transition}
          exit={transition}
        >
          {/* Animations that move text from one place to another without
            * touching width, have to be done with absolute positions.
            */}
          <ABox
            layoutId={`heading-${id}`}
            style={{
              position: "absolute",
              top: "15px",
              left: "15px",
              maxWidth: "300px",
            }}
          >
            <Heading>Modal Title</Heading>
          </ABox>
        </ABox>
        {/* <Button onClick={onOpen}>Open Modal</Button> */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <AModalOverlay />
          <AModalContent
            layoutId={`container-${id}`}
            transition={transition}
            borderRadius="10px"
          >
            {/* <AModalHeader
              layoutId={`heading-${id}`}
              transition={transition}
            >
            </AModalHeader> */}
            {/* <AModalCloseButton animate /> */}
            <AModalBody position="relative" animate>
              <ABox
                layoutId={`heading-${id}`}
                style={{
                  position: "absolute",
                  top: "15px",
                  left: "20px",
                  maxWidth: "300px",
                }}
                transition={transition}
              >
              <Heading>Modal Title</Heading>
              </ABox>
              <ABox mt={16} animate exit={{opacity: 0, ...transition}}>
                {text}
              </ABox>
            </AModalBody>

            <AModalFooter animate exit={{opacity: 0, ...transition}}>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">
                Secondary Action
              </Button>
            </AModalFooter>
          </AModalContent>
        </Modal>
      </AnimateSharedLayout>
    </>
  );
}
