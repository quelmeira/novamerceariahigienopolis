import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Cart: { cartItems: Product[] };
};

type CartScreenRouteProp = RouteProp<RootStackParamList, "Cart">;

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

const CartScreen: React.FC = () => {
  const route = useRoute<CartScreenRouteProp>();
  const cartItems = route.params?.cartItems ?? [];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Carrinho de Compras</Text>

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <View>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>R$ {item.price.toFixed(2)}</Text>
            </View>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>Carrinho vazio.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  header: { fontSize: 20, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  productItem: { flexDirection: "row", padding: 10, borderBottomWidth: 1, borderColor: "#ddd" },
  productImage: { width: 50, height: 50, marginRight: 10 },
  productName: { fontSize: 16, fontWeight: "bold" },
  productPrice: { fontSize: 14, color: "#007bff" },
  emptyText: { textAlign: "center", padding: 20, fontSize: 16, color: "#888" },
});

export default CartScreen;
