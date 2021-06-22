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
import { ABox, AHeading, AModal } from "./chakra-animated-components";

export function Item({ id }) {
  const { category, title } = items.find((item) => item.id === id);
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <AnimateSharedLayout>
      <ABox>
      <AHeading 
        layoutId={`heading-${id}`} onClick={onOpen}>
          Modal Title
      </AHeading>
      </ABox>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}
      <AModal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <AHeading layoutId={`heading-${id}`}>Modal Title</AHeading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <LoremIpsum p={2} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </AModal>
    </AnimateSharedLayout>
  </>
  );
}
