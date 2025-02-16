import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { fetchSales } from "../../api";
import { Relatorio } from './Relatorio';

interface Sale {
  id: string;
  total: number;
  date: string;
}

export default function Relatorio() {
  const [sales, setSales] = useState<Sale[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSales = async () => {
      const data = await fetchSales();
      setSales(data);
      setLoading(false);
    };

    loadSales();
  }, []);

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;

  return (
    <View>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Relatório de Vendas</Text>
      <FlatList
        data={sales}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1 }}>
            <Text>Venda em: {new Date(item.date).toLocaleDateString()}</Text>
            <Text>Total: R$ {item.total.toFixed(2)}</Text>
          </View>
        )}
      />
    </View>
  );
}
