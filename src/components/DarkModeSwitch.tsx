import React from 'react'
import { useColorMode, Switch, Icon, HStack } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <HStack spacing="2">
      { isDark ? <SunIcon/> : <MoonIcon/> }
      <Switch
        color="green"
        isChecked={isDark}
        onChange={toggleColorMode}
      />
    </HStack>
  )
}
