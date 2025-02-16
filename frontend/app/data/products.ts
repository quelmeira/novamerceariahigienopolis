export const products = [
  // Alimentos
  { id: 1, name: "Arroz", category: "Alimentos", price: 20.99, image: "https://via.placeholder.com/50" },
  { id: 2, name: "Feijão", category: "Alimentos", price: 8.50, image: "https://via.placeholder.com/50" },
  { id: 3, name: "Macarrão", category: "Alimentos", price: 5.20, image: "https://via.placeholder.com/50" },
  { id: 4, name: "Farinha de Trigo", category: "Alimentos", price: 4.99, image: "https://via.placeholder.com/50" },
  { id: 5, name: "Óleo de Soja", category: "Alimentos", price: 9.90, image: "https://via.placeholder.com/50" },
  { id: 6, name: "Açúcar", category: "Alimentos", price: 3.50, image: "https://via.placeholder.com/50" },
  { id: 7, name: "Café", category: "Alimentos", price: 12.99, image: "https://via.placeholder.com/50" },

  // Frutas
  { id: 8, name: "Banana", category: "Frutas", price: 6.99, image: "https://via.placeholder.com/50" },
  { id: 9, name: "Maçã", category: "Frutas", price: 9.99, image: "https://via.placeholder.com/50" },
  { id: 10, name: "Laranja", category: "Frutas", price: 5.99, image: "https://via.placeholder.com/50" },
  { id: 11, name: "Uva", category: "Frutas", price: 14.50, image: "https://via.placeholder.com/50" },

  // Legumes
  { id: 12, name: "Batata", category: "Legumes", price: 4.50, image: "https://via.placeholder.com/50" },
  { id: 13, name: "Cenoura", category: "Legumes", price: 3.99, image: "https://via.placeholder.com/50" },
  { id: 14, name: "Abóbora", category: "Legumes", price: 7.99, image: "https://via.placeholder.com/50" },
  { id: 15, name: "Tomate", category: "Legumes", price: 6.49, image: "https://via.placeholder.com/50" },

  // Doces e Balas
  { id: 16, name: "Chocolate", category: "Doces", price: 9.99, image: "https://via.placeholder.com/50" },
  { id: 17, name: "Pirulito", category: "Balas", price: 0.99, image: "https://via.placeholder.com/50" },
  { id: 18, name: "Goma de Mascar", category: "Balas", price: 2.99, image: "https://via.placeholder.com/50" },
  { id: 19, name: "Paçoca", category: "Doces", price: 1.50, image: "https://via.placeholder.com/50" },

  // Limpeza
  { id: 20, name: "Detergente", category: "Limpeza", price: 2.50, image: "https://via.placeholder.com/50" },
  { id: 21, name: "Sabão em Pó", category: "Limpeza", price: 18.90, image: "https://via.placeholder.com/50" },
  { id: 22, name: "Água Sanitária", category: "Limpeza", price: 3.90, image: "https://via.placeholder.com/50" },
  { id: 23, name: "Desinfetante", category: "Limpeza", price: 7.50, image: "https://via.placeholder.com/50" },
];

const categories = ["Alimentos", "Frutas", "Legumes", "Doces", "Balas", "Limpeza"];
const productNames = ["Produto A", "Produto B", "Produto C", "Produto D", "Produto E", "Produto F"];

for (let i = 24; i <= 200; i++) {
  products.push({
    id: i,
    name: `${productNames[i % productNames.length]} ${i}`,
    category: categories[i % categories.length],
    price: (Math.random() * 50 + 1).toFixed(2),
    image: "https://via.placeholder.com/50",
  });
}

  