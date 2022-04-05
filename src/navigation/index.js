import MainNavigator from './main'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  )
}

export default AppNavigation
