import { AsyncStorage } from 'react-native';
import { create } from 'apisauce';

const api = create({
  baseURL: 'http://192.168.11.95:3333/api'
});

api.addAsyncRequestTransform(request => async () =>{
  const token = await AsyncStorage.getItem('@CodeApi:token');

  if (token)
      request.headers['Authorization'] = 'Bearer ${token}';
});

api.addResponseTransform(response => {
  if (!response.ok) throw response;
})

export default api;