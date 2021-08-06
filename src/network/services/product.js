import axios from 'axios';

const baseURL = 'https://fakestoreapi.com/products';

// eslint-disable-next-line import/prefer-default-export
export const getAllProduct = async () => axios.get(baseURL);

export const getProductByCategory = async (category) => axios.get(`${baseURL}/category/${category}`);
