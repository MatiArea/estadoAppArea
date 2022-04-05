// import { faBars, faSignInAlt } from '@fortawesome/free-solid-svg-icons'

// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { Text, TouchableOpacity, View } from 'react-native'

import React from 'react'
import { styleHeader } from './styles'

const Header = ({ navigation }) => {
  
    const redirect = () => {
    navigation.navigate('Iniciar sesion')
  }

  return (
    <View style={styleHeader.header}>
      <View style={styleHeader.container}>
        <View style={styleHeader.headerData}>
          <Text style={styleHeader.headerText}>Tienda Area</Text>
        </View>
        <TouchableOpacity onPress={redirect} style={styleHeader.headerData}>
          {/* <FontAwesomeIcon size={25} icon={faSignInAlt} color={'white'} /> */}
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header
