import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://65b5759241db5efd2867b7ba.mockapi.io/contacts',
});
export const selectContacts = async () => {
  const data = await instance.get('/');
  console.log(data);
  return data;
};
