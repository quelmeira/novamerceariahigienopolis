import React, { useState, useMemo } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

type RootStackParamList = {
  Home: undefined;
  ProductList: { products: Product[] };
  Cart: { cartItems: Product[] };
};

type ProductListScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "ProductList">;

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

const ProductListScreen: React.FC = () => {
  const navigation = useNavigation<ProductListScreenNavigationProp>();
  const route = useRoute();
  const products = (route.params as { products: Product[] })?.products ?? [];

  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const totalItems = useMemo(() => cart.length, [cart]);

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Lista de Produtos</Text>
        
        {/* Ícone do Carrinho */}
        <TouchableOpacity onPress={() => navigation.navigate("Cart", { cartItems: cart })} style={styles.cartButton}>
          <Ionicons name="cart" size={28} color="#fff" />
          {totalItems > 0 && <View style={styles.cartBadge}><Text style={styles.cartBadgeText}>{totalItems}</Text></View>}
        </TouchableOpacity>
      </View>

      {/* Lista de Produtos */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productCategory}>{item.category}</Text>
              <Text style={styles.productPrice}>R$ {item.price.toFixed(2)}</Text>
              
              {/* Botão de Adicionar ao Carrinho */}
              <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
                <Text style={styles.addButtonText}>Adicionar ao Carrinho</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhum produto encontrado.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", height: 50, backgroundColor: "#007bff", paddingHorizontal: 15 },
  headerText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  cartButton: { position: "relative", padding: 5 },
  cartBadge: { position: "absolute", top: -5, right: -5, backgroundColor: "red", borderRadius: 10, paddingHorizontal: 6, paddingVertical: 2 },
  cartBadgeText: { color: "#fff", fontSize: 12, fontWeight: "bold" },
  productItem: { flexDirection: "row", padding: 10, borderBottomWidth: 1, borderColor: "#ddd" },
  productImage: { width: 50, height: 50, marginRight: 10 },
  productInfo: { flex: 1 },
  productName: { fontSize: 16, fontWeight: "bold" },
  productCategory: { fontSize: 14, color: "#666" },
  productPrice: { fontSize: 14, fontWeight: "bold", color: "#007bff" },
  addButton: { marginTop: 5, backgroundColor: "#007bff", padding: 5, borderRadius: 5, alignItems: "center" },
  addButtonText: { color: "#fff", fontSize: 14 },
  emptyText: { textAlign: "center", padding: 20, fontSize: 16, color: "#888" },
});

export default ProductListScreen;
