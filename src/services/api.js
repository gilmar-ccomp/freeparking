import { AsyncStorage } from 'react-native';
import { create } from 'apisauce';

const api = create({
  baseURL: 'https://parking-node-app.herokuapp.com/api'
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