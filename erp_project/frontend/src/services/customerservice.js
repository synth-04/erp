// src/services/customerservice.js

import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/customers/';

export const getCustomers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createCustomer = async (data) => {
  const response = await axios.post(API_URL, data);
  return response.data;
};

export const updateCustomer = async (id, data) => {
  const response = await axios.put(`${API_URL}${id}/`, data);
  return response.data;
};

export const deleteCustomer = async (id) => {
  const response = await axios.delete(`${API_URL}${id}/`);
  return response.data;
};
