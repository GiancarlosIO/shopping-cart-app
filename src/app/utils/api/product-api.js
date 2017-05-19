import axios from 'axios';

const BASE_URL = 'http://localhost:3000/products';

const ProductAPI = {
  getAll: () => {
    let CancelToken = axios.CancelToken;
    let cancel;
    let request = axios({
      method: 'get',
      url: BASE_URL,
      responseType: 'json',
      cancelToken: new CancelToken( c => cancel = c )
    });
    return { request, cancel }
  },
  getByPage: (page) => {
    let CancelToken = axios.CancelToken;
    let cancel;
    let request = axios({
      method: 'get',
      url: `${BASE_URL}?_page=${page}`,
      responseType: 'json',
      cancelToken: new CancelToken( c => cancel = c )
    });
    return { request, cancel }
  }
}

export default ProductAPI;