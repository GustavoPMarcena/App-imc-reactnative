import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const titulo = () => {
  return (
    <View>
      <Text style={styles.fonte}>titulo</Text>
    </View>
  )
}

export default titulo

const styles = StyleSheet.create({
    fonte:{
        color: '#7899',
        fontWeight:'bold',
        fontSize:30,
    },
})