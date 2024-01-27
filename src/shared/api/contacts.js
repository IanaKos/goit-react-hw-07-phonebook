import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://65b5354241db5efd28676f9a.mockapi.io/contacts',
});
export const selectContacts = async () => {
  const data = await instance.get('/');
  console.log(data);
  return data;
};
