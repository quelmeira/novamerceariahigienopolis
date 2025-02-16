export type RootStackParamList = {
    Home: undefined; 
    Cart: { cart: { id: number; name: string; price: number; quantity: number }[] };