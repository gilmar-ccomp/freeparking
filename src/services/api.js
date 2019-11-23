import { create } from 'apisauce';

const api = create({
  baseURL: 'http://localhost:3333/api'
});

api.addResponseTransform(response => {
  if (!response.ok) throw response;
})

export default api;