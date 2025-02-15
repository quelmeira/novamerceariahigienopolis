import React, { useState } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { StackNavigationProp } from '@react-navigation/stack';
import { products } from "../data/products";
import { RootStackParamList } from "../types";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<any[]>([]);

  const filteredProducts = search.length > 0
    ? products.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    : products;

  const addToCart = (product: any) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <View style={styles.container}>
      {/* Topo fixo */}
      <View style={styles.header}>
        <Text style={styles.headerText}>NOVA MERCEARIA HIGIENÓPOLIS</Text>
      </View>

      {/* Campo de busca */}
      <TextInput
        style={styles.searchBar}
        placeholder="Código ou Nome do Produto"
        value={search}
        onChangeText={setSearch}
      />

      {/* Lista de produtos */}
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.category}>{item.category}</Text>
              <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
            </View>
            <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
              <Text style={styles.addButtonText}>Adicionar</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Rodapé fixo com total e botão de carrinho */}
      <View style={styles.footer}>
        <Text style={styles.totalText}>Total: R$ {cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</Text>
        <Text style={styles.totalItems}>{cart.reduce((sum, item) => sum + item.quantity, 0)} item(s)</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Cart", { cart })}>
          <Ionicons name="cart" size={28} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  header: { height: 100, backgroundColor: "#007bff", justifyContent: "center", alignItems: "center" },
  headerText: { color: "white", fontSize: 18, fontWeight: "bold" },
  searchBar: { margin: 15, padding: 10, borderWidth: 1, borderRadius: 5 },
  productItem: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginHorizontal: 10, 
    marginBottom: 10, 
    padding: 10, 
    borderWidth: 1, 
    borderRadius: 5, 
    borderColor: "#ddd",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  productImage: { width: 50, height: 50, marginRight: 10 },
  productInfo: { flex: 1 },
  name: { fontSize: 18, fontWeight: "bold" },
  category: { color: "#555" },
  price: { color: "#007bff", fontWeight: "bold" },
  addButton: { backgroundColor: "#007bff", padding: 10, borderRadius: 5, alignSelf: "flex-end" },
  addButtonText: { color: "white", fontWeight: "bold" },
  footer: { 
    height: 60, 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    paddingHorizontal: 20, 
    backgroundColor: "#f0f0f0", 
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    position: "absolute", 
    bottom: 0, 
    width: "100%" 
  },
  totalText: { fontSize: 16, fontWeight: "bold" },
  totalItems: { fontSize: 16 },
});

export default HomeScreen;
