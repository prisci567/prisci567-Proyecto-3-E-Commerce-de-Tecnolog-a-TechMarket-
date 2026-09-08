
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  Alert,
  TextInput
} from 'react-native';

const PRODUCTOS = [
  {
    id: '1',
    nombre: 'Procesador AMD Ryzen 5',
    precio: 185000,
    detalle_del_producto:
      'Procesador AMD Ryzen 5 para PC de escritorio. Excelente rendimiento para tareas y juegos.',
    stock: 5
  },
  {
    id: '2',
    nombre: 'Teclado mecánico Redragon',
    precio: 65000,
    detalle_del_producto:
      'Teclado mecánico de color negro con iluminación LED.',
    stock: 8
  },
  {
    id: '3',
    nombre: 'Mouse Logitech inalámbrico',
    precio: 45000,
    detalle_del_producto:
      'Mouse Logitech inalámbrico de color negro, cómodo y práctico.',
    stock: 10
  },
  {
    id: '4',
    nombre: 'Memoria RAM Kingston DDR4 16GB 3200MHz',
    precio: 254870,
    detalle_del_producto:
      'Uso: PC de escritorio. Socket: DDR4. Velocidad: 3200 MHz. Capacidad: 16 GB. Cantidad de módulos: 1. Formato: UDIMM. Voltaje: 1,2 V.',
    stock: 8
  }
];

export default function App() {
  const [cantidades, setCantidades] = useState({});

  const cambiarCantidad = (id, cantidad) => {
    setCantidades({
      ...cantidades,
      [id]: cantidad
    });
  };

  const comprarProducto = (item) => {
    const cantidad = Number(cantidades[item.id]) || 0;

    if (cantidad <= 0) {
      Alert.alert('Cantidad incorrecta', 'Ingresá una cantidad mayor a 0.');
      return;
    }

    if (cantidad > item.stock) {
      Alert.alert(
        'Stock insuficiente',
        `No hay suficiente stock de ${item.nombre}. Actualmente hay ${item.stock} unidades disponibles.`
      );
      return;
    }

    const total = cantidad * item.precio;

    Alert.alert(
      'Compra realizada',
      `Producto: ${item.nombre}\nCantidad: ${cantidad}\nTotal: $${total.toLocaleString('es-AR')}`
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.nombre}</Text>

        <Text style={styles.price}>
          ${item.precio.toLocaleString('es-AR')}
        </Text>

        <Text style={styles.detail}>
          {item.detalle_del_producto}
        </Text>

        <Text style={styles.stock}>
          Stock disponible: {item.stock}
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Cantidad"
          keyboardType="numeric"
          value={cantidades[item.id] || ''}
          onChangeText={(texto) =>
            cambiarCantidad(item.id, texto)
          }
        />

        <Button
          title="Comprar"
          onPress={() => comprarProducto(item)}
        />
      </View>
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
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,
    elevation: 2,
  },

  cardContent: {
    flex: 1,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  price: {
    fontSize: 16,
    color: '#2b8a3e',
    marginTop: 5,
    fontWeight: 'bold',
  },

  detail: {
    fontSize: 14,
    marginTop: 8,
    color: '#555',
  },

  stock: {
    fontSize: 14,
    marginTop: 8,
    fontWeight: 'bold',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginTop: 10,
    marginBottom: 10,
  },
});
```
