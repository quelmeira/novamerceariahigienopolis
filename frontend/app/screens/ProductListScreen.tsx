import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, ActivityIndicator } from "react-native";
import { fetchProducts } from "../api";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

export default function ProductListScreen() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setLoading(false);
    };

    loadProducts();
  }, []);

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;

  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row", padding: 10 }}>
            <Image source={{ uri: item.image }} style={{ width: 50, height: 50 }} />
            <View style={{ marginLeft: 10 }}>
              <Text>{item.name}</Text>
              <Text>{item.category}</Text>
              <Text>R$ {item.price.toFixed(2)}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
