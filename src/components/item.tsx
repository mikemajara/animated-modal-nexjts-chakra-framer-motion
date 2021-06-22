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
  Stack,
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
  AStack,
  AText,
} from "./chakra-animated-components";
import { CalendarIcon } from "@chakra-ui/icons";
import {IoLocationOutline} from 'react-icons/io5'

const transition = { type: "spring", bounce: 0 };

export function Item({ id }) {
  const { category, title } = items.find((item) => item.id === id);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
  return (
    <>
      <AnimateSharedLayout type="crossfade">
        <ABox
          p="8"
          justify="start"
          onClick={onOpen}
          layoutId={`container-${id}`}
          // shadow="lg"
          width={["300px", "400px"]}
          style={{
            border: "1px solid",
            borderColor: "lightgrey",
            borderRadius: "10px",
            height: "130px",
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
              top: "20px",
              left: "20px",
              maxWidth: "300px",
            }}
          >
            <Heading>Modal Title</Heading>

            <Stack spacing="3" direction="row" mt={2}>
              <Button size="xs" leftIcon={<CalendarIcon />} _focus={{}} cursor="unset">
                1 year · 3 months
              </Button>
              <Button size="xs" leftIcon={<IoLocationOutline />}  _focus={{}} variant="ghost" cursor="unset">
                Dublin
              </Button>
            </Stack>
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
                <AHeading>Modal Title</AHeading>
                <Stack spacing="3" direction="row" mt={2}>
                  <Button size="xs" leftIcon={<CalendarIcon />} _focus={{}} cursor="unset">
                    1 year · 3 months
                  </Button>
                  <Button size="xs" leftIcon={<IoLocationOutline />} _focus={{}} variant="ghost" cursor="unset">
                    Dublin
                  </Button>
                </Stack>
              </ABox>
              <ABox
                mt={28}
                pb={12}
                animate
                exit={{ opacity: 0, ...transition }}
              >
                {text}
              </ABox>
              <motion.div></motion.div>
            </AModalBody>

            {/* <AModalFooter animate exit={{opacity: 0, ...transition}}>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">
                Secondary Action
              </Button>
            </AModalFooter> */}
          </AModalContent>
        </Modal>
      </AnimateSharedLayout>
    </>
  );
}
