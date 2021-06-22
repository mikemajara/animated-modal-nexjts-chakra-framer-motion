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
import React from 'react'
import { Item } from '@components/item'
import { items } from '@data/data'
import Layout from '@components/layout'
import { DefaultLayoutMain } from '@components/default-layout-main'

const Index = () => {
  console.log(items.slice(0,1))
  return ( 
    <Layout>
        {items.slice(0,1).map((e, idx) => (
          <Item key={idx} id={e.id} />
        ))}
    </Layout>
)}

export default Index
