import { create } from 'apisauce';

const api = create({
  baseURL: 'http://10.0.0.102:3333/api'
});

api.addResponseTransform(response => {
  if (!response.ok) throw response;
})

export default api;