import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import { HomePage } from '../components/home-page'

import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'

const Index = () => (
  <Container height="100vh">
    <Hero />
    <Main>
      <HomePage/>
    </Main>

    <DarkModeSwitch />
    <Footer>
      <Text>Made with ❤️ by Mike Majara</Text>
    </Footer>
    <CTA />
  </Container>
)

export default Index
