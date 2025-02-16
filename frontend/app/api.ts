const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://192.168.1.100:3001/api" 
    : "https://api.novamerceariahigienopolis.com";

export { API_URL };

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/products`);
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return [];
  }
};

export const fetchSales = async () => {
  try {
    const response = await fetch(`${API_URL}/sales`);
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar vendas:", error);
    return [];
  }
};