// src/services/api.js
import config from '../config/env';

// Función para obtener productos
export const fetchProducts = async () => {
  try {
    const response = await fetch(`${config.apiUrl}/products`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

// Función para buscar productos
export const searchProducts = async (query) => {
  try {
    const response = await fetch(`${config.apiUrl}/products/search?query=${encodeURIComponent(query)}`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Error searching products:', error);
    return [];
  }
};

// Función para obtener productos por categoría
export const getProductsByCategory = async (category) => {
  try {
    const response = await fetch(`${config.apiUrl}/products/category/${encodeURIComponent(category)}`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Error fetching products by category:', error);
    return [];
  }
};

// Función para crear pedidos
export const createOrder = async (orderData) => {
  try {
    const response = await fetch(`${config.ordersApiUrl}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};
// Función para obtener un pedido por su ID
export const getOrderById = async (orderId) => {
  try {
    const response = await fetch(`${config.ordersApiUrl}/orders/${orderId}`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Error fetching order:', error);
    return null;
  }
};

// Función para crear una devolución
export const createReturn = async (returnData) => {
  try {
    const response = await fetch(`${config.ordersApiUrl}/returns`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(returnData),
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Error creating return:', error);
    throw error;
  }
};