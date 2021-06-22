import { Box } from "@chakra-ui/react";
import { Head } from "next/document";
import React from "react";
import { Container } from "./Container";
import { DefaultLayoutMain } from "./default-layout-main";
import { Footer } from "./Footer";
import Header from "./header";

export default function Layout(props: any) {
  return (
    <Box>
      {/* <Head></Head> */}
      <main>
        <Box position="fixed">
          <Header />
        </Box>
        <Container minHeight="100vh" pt="20">
          {props.children}
          <Footer>
            Made with ❤ by mikemajara
          </Footer>
        </Container>
      </main>
    </Box>
  );
}
 