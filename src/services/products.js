export const mockProducts = [
  {
    id: 1,
    name: "Smartphone XY Pro",
    description: "Último modelo con cámara de alta resolución y batería de larga duración",
    shortDescription: "Smartphone de última generación",
    price: "$599.99",
    category: "Electrónica",
    brand: "TechX",
    stock: 15,
    image: "/api/placeholder/300/300",
    specs: {
      screen: "6.5 pulgadas",
      battery: "4500mAh",
      storage: "128GB"
    }
  },
  {
    id: 2,
    name: "Laptop UltraBook",
    description: "Perfecta para trabajo y entretenimiento con procesador de última generación",
    shortDescription: "Laptop ultradelgada y potente",
    price: "$999.99",
    category: "Electrónica",
    brand: "TechX",
    stock: 8,
    image: "/api/placeholder/300/300",
    specs: {
      processor: "Intel i7",
      ram: "16GB",
      storage: "512GB SSD"
    }
  },
  {
    id: 3,
    name: "Auriculares Wireless Pro",
    description: "Sonido de alta calidad con cancelación de ruido activa",
    shortDescription: "Auriculares inalámbricos premium",
    price: "$199.99",
    category: "Electrónica",
    brand: "AudioTech",
    stock: 20,
    image: "/api/placeholder/300/300",
    specs: {
      battery: "30 horas",
      connectivity: "Bluetooth 5.0",
      type: "Over-ear"
    }
  },
  // ... puedes agregar más productos
];

export const categories = [
  "Electrónica",
  "Hogar",
  "Ropa",
  "Deportes",
  "Libros",
  "Juguetes"
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockProducts), 500);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = mockProducts.find(p => p.id === id);
      resolve(product);
    }, 300);
  });
};

export const searchProducts = (query) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = mockProducts.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
      );
      resolve(filtered);
    }, 300);
  });
};