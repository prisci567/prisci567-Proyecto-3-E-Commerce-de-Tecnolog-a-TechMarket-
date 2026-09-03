import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button, Alert } from 'react-native';
const PRODUCTOS = [
   { id: '1', nombre: 'cpu', precio: '$1245',detalle_del_producto:'Su potencia depende de la cantidad de núcleos (capacidades para hacer tareas a la vez) y su velocidad medida en gigahercios', stock:'disponible'},
  { id: '2', nombre: 'teclado', precio: '$15.000',  detalle_del_producto: 'de color negro con luces led', stock:'disponible' },
  { id: '3', nombre: 'Mouse', precio: '$12.000', detalle_del_producto: 'negro con luces led',stock:'disponible' },
  { id: '4', nombre: 'memoria de ram', precio: '$11.000', detalle_del_producto:'memoria de 6gb', stock:'disponible' },


];
export default function App() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.nombre}</Text>
        <Text style={styles.price}>{item.precio}</Text>
      </View>
      <Button
        title="Comprar"
        onPress={() => Alert.alert('Comprado', `Añadiste ${item.nombre}`)}
      />
    </View>
  );
   return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Inicia orden</Text>
      <FlatList
        data={PRODUCTOS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listPadding}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef2f5',
    paddingTop: 50,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  listPadding: {
    paddingHorizontal: 15,
  },
   card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
    marginBottom: 12,
    elevation: 2,
  },
    cardImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  cardContent: {
    flex: 1,
    marginLeft: 12,
  },
   title: {
    fontSize: 16,
    fontWeight: '600',
  },
  price: {
    fontSize: 14,
    color: '#2b8a3e',
    marginTop: 4,
  },
});