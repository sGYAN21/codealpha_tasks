import { Product } from '../types';

const PRODUCTS_KEY = 'products';

export const defaultProducts: Product[] = [
  {
    id: '1',
    name: 'Eco-Friendly Water Bottle',
    description: 'Sustainable stainless steel water bottle, perfect for daily use.',
    price: 24.99,
    image_url: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8',
    stock: 50
  },
  {
    id: '2',
    name: 'Organic Cotton T-Shirt',
    description: 'Comfortable, sustainable, and stylish organic cotton t-shirt.',
    price: 29.99,
    image_url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
    stock: 100
  },
  {
    id: '3',
    name: 'Bamboo Cutlery Set',
    description: 'Portable bamboo cutlery set for eco-conscious dining.',
    price: 19.99,
    image_url: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7',
    stock: 75
  },
  {
    id: '4',
    name: 'Smart Fitness Watch',
    description: 'Track your health and fitness goals with this advanced smartwatch.',
    price: 199.99,
    image_url: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a',
    stock: 30
  },
  {
    id: '5',
    name: 'Wireless Earbuds',
    description: 'Premium wireless earbuds with noise cancellation technology.',
    price: 149.99,
    image_url: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df',
    stock: 45
  },
  {
    id: '6',
    name: 'Yoga Mat',
    description: 'Non-slip, eco-friendly yoga mat for your daily practice.',
    price: 39.99,
    image_url: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f',
    stock: 60
  },
  {
    id: '7',
    name: 'Coffee Maker',
    description: 'Programmable coffee maker with thermal carafe.',
    price: 79.99,
    image_url: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6',
    stock: 25
  },
  {
    id: '8',
    name: 'Backpack',
    description: 'Durable waterproof backpack with laptop compartment.',
    price: 59.99,
    image_url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62',
    stock: 40
  },
  {
    id: '9',
    name: 'Plant Stand',
    description: 'Modern bamboo plant stand for indoor decoration.',
    price: 34.99,
    image_url: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411',
    stock: 55
  },
  {
    id: '10',
    name: 'Desk Lamp',
    description: 'LED desk lamp with adjustable brightness and color temperature.',
    price: 44.99,
    image_url: 'https://images.unsplash.com/photo-1534281368625-1c90e158fd37',
    stock: 35
  }
];

export const getProducts = (): Product[] => {
  const products = localStorage.getItem(PRODUCTS_KEY);
  if (!products) {
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(defaultProducts));
    return defaultProducts;
  }
  return JSON.parse(products);
};

export const addProduct = (product: Omit<Product, 'id'>): Product => {
  const products = getProducts();
  const newProduct = {
    ...product,
    id: Math.random().toString(36).substr(2, 9)
  };
  
  products.push(newProduct);
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
  return newProduct;
};

export const updateProduct = (id: string, updates: Partial<Product>): Product | null => {
  const products = getProducts();
  const index = products.findIndex(p => p.id === id);
  
  if (index === -1) return null;
  
  const updatedProduct = { ...products[index], ...updates };
  products[index] = updatedProduct;
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
  return updatedProduct;
};

export const deleteProduct = (id: string): boolean => {
  const products = getProducts();
  const filteredProducts = products.filter(p => p.id !== id);
  
  if (filteredProducts.length === products.length) return false;
  
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(filteredProducts));
  return true;
};