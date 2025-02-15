import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
}

interface Props {
  product: Product;
  onAdd: (product: Product) => void;
}

const ProductItem: React.FC<Props> = ({ product, onAdd }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => onAdd(product)}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: { flexDirection: "row", padding: 10, alignItems: "center", borderBottomWidth: 1, borderColor: "#ddd" },
  image: { width: 50, height: 50, marginRight: 10 },
  details: { flex: 1 },
  name: { fontWeight: "bold", fontSize: 16 },
  category: { color: "gray" },
  price: { fontSize: 14, fontWeight: "bold" },
  button: { backgroundColor: "#007AFF", padding: 8, borderRadius: 5 },
  buttonText: { color: "#fff", fontSize: 14 },
});

